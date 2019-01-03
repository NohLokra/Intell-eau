#include "akeru.h"

#define DISTANCE_SENSOR_TRIG_PIN 2 // Le pin du capteur qui envoie l'ultrason
#define DISTANCE_SENSOR_ECHO_PIN 3 // Le pin du capteur qui reçoit l'impulsion
#define LIQUID_PRESENCE_SENSOR_DATA_PIN 6 // Le pin qui reçoit le signal du capteur de présence de liquide
#define SIGFOX_TX 5
#define SIGFOX_RX 4
#define WATER_LEVEL_SENSOR_DATA_PIN A5

#define CM 1      //Centimeter
#define INC 0     //Inch


Akeru akeru(SIGFOX_RX, SIGFOX_TX);
char sigfoxMessage[12];

void setup() {
  // On setup nos PIN en entrée/sorite
  pinMode(DISTANCE_SENSOR_TRIG_PIN,OUTPUT);
  pinMode(DISTANCE_SENSOR_ECHO_PIN,INPUT);
  pinMode(LIQUID_PRESENCE_SENSOR_DATA_PIN, INPUT);
  pinMode(WATER_LEVEL_SENSOR_DATA_PIN, INPUT);

  analogReference(EXTERNAL);
  
  // Initialisation du modem Sigfox
  akeru.begin();
  akeru.echoOn();
  
  memset(sigfoxMessage, 0, 12);

  Serial.begin(9600);      // init serial 9600
  Serial.println("---------------Intell'eau----------------");
}

void loop() {
  char distance = getDistance();
  char liquidPresence = getLiquidPresence();

  Serial.print("Distance des gobelets: ");
  Serial.println(distance, DEC);
  Serial.print("Présence d'eau ? ");
  if ( liquidPresence == 1 ) {
    Serial.println("Oui");
  } else {
    Serial.println("Non");
  }

  sigfoxMessage[0] = distance;
  sigfoxMessage[1] = liquidPresence;

  sendData();

  Serial.print("Water level: ");
  Serial.println(analogRead(WATER_LEVEL_SENSOR_DATA_PIN));
  delay(3000);
}

// getDistance renvoie la distance mesurée par le capteur à ultrasons sur une moyenne de 50 émissions
char getDistance() {
  Serial.print("Calcul de la distance: ");
  long acc = 0;
  int measuresCount = 10;

  for ( int i = 0 ; i < measuresCount ; i++ ) {
    long microseconds = getDistanceFromSensor(); // Ici, dans microseconds on stocke la durée qu'a mis le signal à nous revenir

    acc += microseconds;
    delay(1);

    Serial.print(microseconds);
    Serial.print(" microsecondes: ");
    Serial.print((i+1)*100/measuresCount);
    Serial.println("% ");
  }
  
  Serial.println("Distance OK");
  
  long distance_cm = computeDistance(acc/measuresCount, CM); // A partir de cette durée on calcule la distance

  return distance_cm;
}

char computeDistance(long time, int flag) {
  char distance;
  if(flag)
    distance = time / 29.4 / 2  ;  // Distance_CM  = ((Duration of high level)*(Sonic :340m/s))/2
                                   //              = ((Duration of high level)*(Sonic :0.034 cm/us))/2
                                   //              = ((Duration of high level)/(Sonic :29.4 cm/us))/2
  else
    distance = time / 74 / 2;      // INC
    
  return distance;
}

long getDistanceFromSensor() { // Fonction 100% pompée sur le net qui calcule la distance en fonction du temps de réception de l'onde
  digitalWrite(DISTANCE_SENSOR_TRIG_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(DISTANCE_SENSOR_TRIG_PIN, HIGH);                   // On envoie une vague d'ultrasons
  delayMicroseconds(10);
  digitalWrite(DISTANCE_SENSOR_TRIG_PIN, LOW);                    // On coupe l'émission des ultrasons
  long microseconds = pulseIn(DISTANCE_SENSOR_ECHO_PIN, HIGH);    // On attend de recevoir un signal sur le micro, la fonction nous renvoie sa durée d'attente dans un long

  return microseconds;
}

char getLiquidPresence() {
  char level = digitalRead(LIQUID_PRESENCE_SENSOR_DATA_PIN);

  return level;
}

void sendData() {
  Serial.println("Envoi du message");
  // On envoie le message dans notre backend Sigfox et on reset tous les octets dans sigfoxMessage
  String msg = akeru.toHex(sigfoxMessage, 12);

  if ( akeru.sendPayload(msg) ) {
    Serial.println("Message envoyé"); 
  }
  
  memset(sigfoxMessage, 0, 12);
  Serial.println("Buffer reset");
}

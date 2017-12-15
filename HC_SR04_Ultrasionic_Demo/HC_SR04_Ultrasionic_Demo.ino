/* Ultrasonic Ranging
 Library for HC-SR04 Ultrasonic Ranging Module.librar
 created 2011
 by Robi.Wang
 www.Elecfreak.com
 */

#define DISTANCE_SENSOR_TRIG_PIN 2 // Le pin du capteur qui envoie l'ultrason
#define DISTANCE_SENSOR_ECHO_PIN 3 // Le pin du capteur qui reçoit l'impulsion
#define LIQUID_PRESENCE_SENSOR_DATA_PIN 4 // Le pin qui reçoit le signal du capteur de présence de liquide

#define CM 1      //Centimeter
#define INC 0     //Inch

void setup(){
  pinMode(DISTANCE_SENSOR_TRIG_PIN,OUTPUT);
  pinMode(DISTANCE_SENSOR_ECHO_PIN,INPUT);
  pinMode(LIQUID_PRESENCE_SENSOR_DATA, INPUT);
  
  Serial.begin(9600);      // init serial 9600
  Serial.println("---------------Fontaine à eau connectée----------------");
}

void loop(){  
  long distance = getDistance();
  Serial.print("Distance des gobelets: ");
  Serial.println(distance, DEC);
  Serial.print("Présence d'eau ? ");
  
  delay(3000);
}

long getDistance() {
  long acc = 0;
  
  for ( int i = 0 ; i < 50 ; i++ ) {
    long microseconds = TP_init();
    long distance_cm = Distance(microseconds, CM);

    acc += distance_cm;
    delay(1);
  }

  return acc / 50;
}

long Distance(long time, int flag)
{
  long distance;
  if(flag)
    distance = time /29 / 2  ;     // Distance_CM  = ((Duration of high level)*(Sonic :340m/s))/2
                                   //              = ((Duration of high level)*(Sonic :0.034 cm/us))/2
                                   //              = ((Duration of high level)/(Sonic :29.4 cm/us))/2
  else
    distance = time / 74 / 2;      // INC
  return distance;
}

long TP_init() {                     
  digitalWrite(DISTANCE_SENSOR_TRIG_PIN, LOW);                    
  delayMicroseconds(2);
  digitalWrite(DISTANCE_SENSOR_TRIG_PIN, HIGH);                 // pull the Trig pin to high level for more than 10us impulse 
  delayMicroseconds(10);
  digitalWrite(DISTANCE_SENSOR_TRIG_PIN, LOW);
  long microseconds = pulseIn(DISTANCE_SENSOR_ECHO_PIN, HIGH);   // waits for the pin to go HIGH, and returns the length of the pulse in microseconds
  return microseconds;                    // return microseconds
}

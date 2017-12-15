//* 
#include "akeru.h"

#define TX 4
#define RX 5

Akeru akeru(TX, RX);

void setup()
{
  akeru.begin();
  akeru.echoOn();
}

void loop(){
  char array[] = "Hello world";
  String arrayString= akeru.toHex(array, sizeof(array));
  akeru.sendPayload(arrayString);
}
//*/

/***************************************************
 2 * Liquid Level Sensor-XKC-Y25-T12V 
 3 * ****************************************************
 4 * This example is to get liquid level
 5   
 6 * @author jackli(Jack.li@dfrobot.com)
 7 * @version  V1.0
 8 * @date  2016-1-30
 9   
10 * GNU Lesser General Public License.
11 * See <http://www.gnu.org/licenses/> for details.
12 * All above must be included in any redistribution
13 * ****************************************************/

/*
int Liquid_level=0;
void setup() {
  Serial.begin(9600);
  pinMode(5,INPUT);
}
 
void loop() {
 Liquid_level=digitalRead(5);
 Serial.print("Liquid_level= ");
 Serial.println(Liquid_level,DEC);
 delay(60000);
}
*/

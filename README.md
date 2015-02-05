This is a NodeJS server using Restify Framework that converts San Diego MTS SOAP api calls for bus times to REST api calls. 

I'm using this on my Raspberry Pi to hopefully display the time on some kind of display later on.
But eventually the REST api will allow me to change the bus time to display on the Pi.

For instance: 
GET myraspberrypiaddress/api/stop/12345
will send a http GET request to get the bus stop times for the stop number 12345

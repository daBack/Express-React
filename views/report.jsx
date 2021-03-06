var React = require('react');
var PropTypes = require('prop-types');
var Layout = require('./layout');


class Report extends React.Component {
  render() {
    return (
      <Layout title={this.props.title}>
          <div class='outerWrapper'>
              <div class='innerWrapper'>
                  <div class='report'>
                      <div class='kmom'>
                          <h4>Kmom01</h4>
                          <article><b>Berätta utförligt om din syn på Express och Pug och hur de samverkar. Relatera till andra ramverk du jobbat med. Lyft fram de fördelar och eventuellt nackdelar du finner, eller bara notera skillnader och likheter.</b>
                              <br></br><br></br>
                              Jag valde att använda mig utav Express och React istället för Pug. Jag har länge varit intresserad av att skapa en sida utav de ramverk som Facebook använder. Nu när jag fick chanser att göra det från grunden i kursen så ville jag använda mig av React som front-end.
                              Det är otroligt smidigt att använda sig utav express views. Då lägger jag bara in de sidor jag vill ha i min views-katalog som jsx fil och så kan express själv läsa av de filerna. Då utgår jag ifrån att jag först har sagt vilken typ av fil jag vill använda mig av i app.js. Jag gillar hur det är uppbyggt då man
                              säger vilka routrar som finns i appen, som sedan skickar dig vidare till router filerna, som skickar dig till rätt fil.
                              <br></br>
                              Om jag jämför med Anax så ser jag liknande tanke i filträdet. Det är uppdelat i routrar, views och en app (eller di) där du startar och initierar allt. I båda ramverken kunde man enkelt lägga till moduler. Skillnaden är att med express kunde jag använda mig utav npm install och i anax så kunde jag hämta moduler ifrån anax själv som ramverk.
                              Fördelen jag känner med React är att jag kan på ett enkelt sätt skapa layout med hjälp av props. Då kan jag skicka information mellan de olika vyerna. Allt är väldigt enkelt då jag kan mixa mellan js och html.
                              <br></br><br></br>
                              <b>Berätta om din katalogstruktur och hur du organiserade din kod, hur tänkte du?</b>
                              Eftersom jag använde mig av express views så gav de mig en grundstruktur att arbeta från. Det gav mig en router katalog och en views katalog. Såhär långt har jag bara valt att lägga min filer rakt där i, men om det kommer fler filer, så kommer jag troligtvis skapa flera underkataloger och dela upp koden mer. jag valde att dela ut katalogen public mer (där stylesheet och bilder etc finns). Där skapade jag underkataloger så jag slapp ha allt i samma katalog.
                              <br></br><br></br>
                              <b>Använde du någon form av scaffolding som Express erbjuder?</b><br></br>
                              Som jag har nämnt ovan så använde jag mig utav express views. Till en början hittade jag en guide som lät mig skapa en server för Express och en för React. Därefter kunde jag skicka info mellan de två servrarna. Jag kände att efter att ha kikat på den varianten ett tag så märkte jag att det var svårt. Jag valde att använda mig av express views som Magnus introducerade mig till. Det var ett enkelt sätt att använda mig av både React och Express.
                              <br></br><br></br>
                              <b>Jobbar du med Markdown för innehållet, eller annat liknande?</b><br></br>
                              Jag jobbar just nu inte med markdown. Jag kikade på tillägget för express men jag var osäker på hur jag skulle implementera det. I min “better code” så hade jag för många rader i vissa av mina view filer. Jag tänker att jag ska implementera markdown senare, så jag kan skilja på informationen  på hemsidan, och sidans design.
                              </article>
                      </div>
                      <div class='kmom'>
                          <h4>Kmom02</h4>
                          <article>
                            <b>Har du jobbat med Docker eller andra virtualiseringstekniker innan?</b><br></br>
                            Innan detta kursmoment har jag inte använt eller hört talas om Docker. Det verkar vara ett bra verktyg för att enkelt testa olika miljöer och versioner. Tidigare har jag använt mig utav virtualbox vilket är mycket mer komplex då du själv måste sätta upp hela operativsystemet. Docker behövde bara en rad för att starta allt. Snabbt stabilt och jätte jättebra.
                            <br></br><br></br>
                            <b>Hur ser du på möjligheterna att använda dig av Docker för att jobba med tester av ditt repo?</b><br></br>
                            Jag tycker det är en bra metod. Då kan jag till exempel skriva väldigt ny javascript kod och sedan se om den är bakåtkompatibel. Det känns som ett sätt att ytterligare säkra sin sida mot buggar och fel.
                            <br></br><br></br>
                            <b>Gick allt smidigt eller stötte du på problem?</b><br></br>
                            Det gick helt okej tills jag skulle skapa min egna docker-compose.yml fil. Jag letade efter hur jag skulle skriva det för node, men inget framgång. Jag testade med några olika rader som jag la till och tog bort men det löste sig inte. Tillslut fick jag hjälp utav Magnus som gav mig tips. Utöver det gick det bra och jag kände att jag fick en grundläggande kunskap kring Docker.
                            <br></br><br></br>
                            <b>Skapade du din egen image, berätta om den?</b><br></br>
                            Jag skapade ingen egen image då jag inte kände behov för det nu. Jag ser möjligheterna med det så jag tror att det kan hända längre fram i min kodkarriär.
                        </article>
                      </div>
                      <div class='kmom'>
                          <h4>Kmom03</h4>
                          <article>
                                <b>Berätta vilka tekniker/verktyg du valde för enhetstester och kodtäckning och varför?</b><br></br>
                                Jag valde de verktyg som introducerades i övningen, mocha och nyc. Eftersom det var bra dokumenterat om hur det fungerade så kände jag att det dög för min kod. För kodtäckningen så använde jag alla de tjänster som fanns i övningen också. Jag var osäker på vilka jag faktiskt skulle använda i framtiden så därför implementerade jag så många som möjligt. Det blev:
                                Codeship, Bettercodehub, code coverage, circleCi, Scrutinizer, TravisCi och codeclimate.
                                <br></br><br></br>
                                <b>Berätta om cin CI-kedja och reflektera över de valen du gjorde?</b><br></br>
                                Jag känner att jag förstod begreppet och fördelarna men jag var osäker på hur jag skulle integrera det helt. Jag tror att jag lyckats relativt så att det funkar både för make test och npm test. Jag är osäker på om jag riktigt kopplade det rätt till Travis men är nöjd med hur det blev.
                                <br></br><br></br>
                                <b>Reflektera över hur det gick att integrera enhetstesterna i olika Docker-kontainerns och om du ser någon nytta med detta.</b>
                                <br></br>
                                Jag tycker att docker verkar som ett bra verktyg, jobbigt men otroligt smart. Jag hade problem när jag skulle sätta upp min docker-compose fil då jag inte hittade någon fil för hur den skulle skrivas.
                                Jag hade velat ha lite mer info om hur den skrivs (speciellt för node). Det kan vara så att jag inte hittat det än bara. Jag tror att om man jobbar på ett stort företag där en stor app ska ut, så är docker otroligt bra, men om det bara är små hobby projekt så hade jag inte velat lägga så mycket tyngd på test för olika versioner.
                                <br></br><br></br>
                                <b>Hur väl lyckades du utvärdera TDD-konceptet och vilka är dina reflektioner?</b><br></br>
                                Hell no. Nej men jag känner att det inte är mitt sätt att jobba på. Visst är det viktigt med testning men aldrig till den grad så att du skriver testerna först och skriver din kod anpassad till dem. (:
                                <br></br><br></br>
                                <b>Berätta om tankarna kring din klient/server applikation och nämn de tekniker du använder.</b><br></br>
                                Jag har valt att skapa två express servrar, en för frontend med react och en för backend där jag kommer hantera mina funktioner och data etc. Just nu har jag bara några få funktioner där jag hämtar info från ett api. Dock så får jag inte den data jag vill från api:t så jag kommer troligtvis att ta bort det och använda mig av annan data om jag inte får svar från de som ger ut api:t.
                                <br></br><br></br>
                                Idén är att jag vill skapa en app till ett spel där den hämtar information från föregående match (player unknowns battleground) som sedan sparas och matchas med de spelare du har lagt till på sidan. Den spelaren som har högst poäng vinner.


                          </article>
                      </div>
                      <div class='kmom'>
                          <h4>Kmom04</h4>
                          <article><b>Är du ny på realtidsprogrammering eller har du gjort liknande tidigare?</b><br></br>
                              Jag har tidigare aldrig jobbat med realtid. Inte heller något som kommer nära. Det är otroligt coolt att man på ett enkelt sett kan inkludera en chatt på ens egen sida.
                              Nu i början så såg jag bara hur det kunde komma att användas i en chat, men när jag blir mer bekväm med det så tror jag att jag kan inkludera websockets
                              på andra sätt.
                              <br></br><br></br>
                              <b>Hur gick det att jobba med konceptet realtidsprogrammering i webben, några reflektioner?</b><br></br>
                              Det gick hyffsat. Jag löste lätt att inkludera övningen och gå igenom den. Problemet kom sen när jag skulle byta ut det till json. Just nu kan man skicka via både JSON och text men det får man ändra i vyn.
                              Jag valde att göra så för att själva valmömöjligheten i sig inte är så behövande för användaren. Däremot har jag byggt upp så att subprotocol fungerar och att det går att skapa flera.
                              Problemet kom sen när jag skulle byta till JSON, då jag var lite osäker på hur informationen skulle skickas. Tillslut märkte jag felet och det var fel på hur jag hade parsat mitt JSON meddelande.
                              <br></br><br></br>
                              <b>Berätta om din chatt som du integrerade i redovisa-sidan.</b><br></br>
                              På redovisningssidan är det en vanlig chat som fungerar, punkt. Den har ej meddelande för när en enhet ansluter eller lämnar vilket jag lämnade öppet efter lite försök.
                              Däremot så fungerar allt det som ska, man kan använda Nickname och ansluta med JSON.
                              Jag försökte mig på att skriva ett par enhetstester för min client fil, men stötte på patrull. När jag skapat ett test, så får jag att documentet inte är definerat. Troligtvis är det fel
                              i min syntax någonstanns men efter att ha kikat runt lite så löste jag det inte. Jag väntar med det och kommer införa det senare i min app/projekt.
                              <br></br><br></br>
                              <b>Berätta om den realtidsfunktionalitet du väljer att integrera i din klient/server applikation.</b><br></br>
                              Jag kommer troligtvis inte använda det som en chatt, utan mer som en inforuta. Min tanke är att "spelarna" på sidan ska skicka in data till server, som efter funktioner, skickar tillbaka data om
                              vem som har vunnit. Då tänkte jag att jag använder server till att skicka ut dessa meddelande via websocket. Det kommer kanske finnas en chat, men det viktigaste är att vem som har vunnit etc
                              visas direkt. Jag har än inte skrivit någon kod från förra kursmomentet utan bara fokuserat på hur datan ska hanteras och skapat själva vyerna så jag enkelt kan hantera det. Jag gjorde bland annat en
                              mindmap på mindmeister som hjälp.
                          </article>
                      </div>
                      <div class='kmom'>
                          <h4>Kmom05</h4>
                          <article>
                                <b>Hur gick det att komma igång med databasen MongoDB?</b><br></br>
                                Jag tyckte det gick bättre än förväntat. Jag har hanterat JSON objekt tidigare
                                men inte inom en databas. Det var lite krångligt i början då jag inte förstod
                                hur jag skulle få terminal raden (som skapar objekten) till att få det till en
                                funktion.
                                <br></br><br></br>
                                <b>Vilken syn har du på databaser inom konceptet NoSQL?</b><br></br>
                                Jag gillar det starkt. Det känns så mycket smidigare än sql, då de sparas i
                                tabeller. På det här sättet så känns det som det även finns “kod” i databasen
                                och inte behövs översätta det till “vanligt format” och tillbaka.
                                <br></br><br></br>
                                <b>Reflektera över skillnader och likheter mellan relationsdatabaser och
                                databaser inom NoSQL.</b><br></br>
                                En av skillnaderna är att i NoSQL hanterar man objekt, ofta med key och value
                                värden, medan i “rdb” så hanteras datan i en tabell. En annan skillnad jag
                                märkte var att man måste inte förbestämma vilka “kolumner” som ska finnas.
                                Man kan bara slänga in key och value värden utan en tidigare “setup” vilken
                                man måste göra i en rdb. Där skapar du strukturen innan du börjar lägga in
                                information.
                                <br></br><br></br>
                                <b>Vilka är dina tankar om asynkron programmering med JavaScript?</b><br></br>
                                Jag tycker det är smart, att den väntar på det som tar tid och att det måste
                                göras klart innan koden fortsätter. Det negativa är att man måste skriva det
                                själv och själv säga när det ska vara asynkront. Visst kan det vara bra, men
                                det hade varit skönt att om något tog längre tid (tex en request från ett
                                api) så tar den, den tid den behöver.
                                Overall så gillar jag det!
                                <br></br><br></br>
                                <b>Hur känner du för Docker och det sättet vi jobbar med tjänster i
                                kontainrar?</b><br></br>
                                Jag röstar på onödigt. Det är ett otroligt bra verktyg och jag förstår meningen
                                med det. Det var smidigt när jag väl satt upp mongodb och express i
                                containrar men det var mycket förarbete. Just här hade jag valt att bara starta
                                dessa två normalt. Jag tycker dock att när det gäller testning så är det otroligt
                                bra när man kan köra olika node moduler så man vet om koden är bakåt
                                kompatibel.
                                <br></br><br></br>
                                Jag har inte gjort några nya tester, eller implementerar databas i min app.
                                Detta är för att jag har skapat en struktur men har andra delar i mitt
                                “projekt” som jag vill göra först. Jag har förstått hur mongodb används
                                så jag vet hur jag ska implementera det i mitt projekt.


                          </article>
                      </div>
                      <div class='kmom'>
                          <h4>Kmom06</h4>
                          <article></article>
                      </div>
                      <div class='kmom'>
                          <h4>Kmom10</h4>
                          <article></article>
                      </div>
                  </div>
              </div>
          </div>
      </Layout>
    );
  }
}

Report.propTypes = {
    title: PropTypes.string,
};

module.exports = Report;

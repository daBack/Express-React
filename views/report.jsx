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
                          <article></article>
                      </div>
                      <div class='kmom'>
                          <h4>Kmom03</h4>
                          <article></article>
                      </div>
                      <div class='kmom'>
                          <h4>Kmom04</h4>
                          <article></article>
                      </div>
                      <div class='kmom'>
                          <h4>Kmom05</h4>
                          <article></article>
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

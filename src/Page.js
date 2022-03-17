import React from "react";
import { useState } from 'react';
import { setOpen } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import Collapse from 'react-bootstrap/Collapse';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Eletorix1 from './images/eletorix1.png';
import Eletorix from './images/eletorix.png';
import Eletorix3 from './images/eletorix3.PNG';
import Maapeli from './images/maapeli.png';
import Roki from './images/roki.jpg';
import Namo1 from './images/namo1.jpg';
import Namo2 from './images/namo2.jpg';
import Namo3 from './images/namo3.jpg';
import Puu1 from './images/puut1.jpg';
import Puu2 from './images/puut2.jpg';
import Puu3 from './images/puut3.jpg';
import Puu4 from './images/puut4.jpg';
import AMK1 from './images/amk1.jpg';
import AMK2 from './images/amk2.jpg';
import AMK3 from './images/amk3.jpg';
import AMK4 from './images/amk4.jpg';
import AMK5 from './images/amk5.jpg';
import AMKK1 from './images/amkk1.png';
import AMKK2 from './images/amkk2.png';
import AMKK3 from './images/amkk3.png';
import Mina from './images/mina.jpg';
import Tausta from './images/25.jpg';
import Nimmarit from './images/nimmarit.png';
import Formula from './images/Laajakuva.png';


export default function App() {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    return (
        <div id="start" className="tausta text-center">
            <Button href="#start" className="  ylos">^^^</Button>
            <Navbar expand="lg" className="tausta">
                <Navbar.Brand  href="https://jessehuttunen.github.io/portfolio">Jesse Huttunen</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#mina">Minä</Nav.Link>
                        <Nav.Link href="#koulutus">Koulutus</Nav.Link>
                        <Nav.Link href="#osaaminen">Osaaminen</Nav.Link>
                        <Nav.Link href="#tyokokemus">Työkokemus</Nav.Link>
                        <Nav.Link href="#projekteja">Projekteja</Nav.Link>
                        <Nav.Link href="#yhteystiedot">Yhteystiedot</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>


            <Jumbotron fluid className="titteli">
                <Container>
                    <h1 className="text-center display-4 text-light">Jesse Huttunen</h1>
                </Container>
            </Jumbotron>

            <Jumbotron fluid className="tiedot">


                <Container className="text-left">
                    <Image className="d-block w-25 m-auto pb-3" src={Mina} roundedCircle />
                    <p>Olen vasta valmistunut mediatekniikan opiskelija Jyväskylän ammattikorkeakoulusta.</p>
                    <p>Koodailusta minulla on kokemusta useilla eri kielillä. Mediateknikkona pääpaino verkkopohjaisissa kielissä kuten JavaScript, PHP, React ja SQL. Hallitsen kuitenkin myös tavallisia ohjelmointikieliäkin kuten esim. C# ja Python.</p>
                    <p>Tavoitteenani on olla niin sanottu "joka paikan höylä", eli ei ole merkitystä onko koodaus Front- vai Backendiä, koitan aina saada aikaiseksi mahdollisimman hyvää jälkeä.</p>
                    <p>Pidän myös visuaalisesta työstä, graafisesta-, UI- sekä UX suunnittelusta, video-/valokuvaus ja editointi, kuin myös 3D mallintamisestakin.</p>
                    <p> Luonteeltani olen hiljainen, oma-aloitteinen, työmyyrä.</p>
                    <p> Hyödyllisinä harrastuksina minulla on puutöiden teko, valo-/videokuvaus ja kaikenlainen tietokoneiden rassaus.</p>
                    <p> Muina harrastuksina minulla on mm. eläimet, veneily/kalastus, elokuvat ja videopelit.</p>
                </Container>
            </Jumbotron>

            <Jumbotron fluid className="titteli">
                <Container>
                    <h1 id="osaaminen" className="text-center display-4 text-light">Osaaminen</h1>
                </Container>
            </Jumbotron>
            <Jumbotron fluid >

                <Container >


                    <p>Koulusta, töistä, sekä harrastuksista minulla on kokemusta mm. seuraavista aiheista:</p>
                    <Row className="text-right">
                        <Col>
                            <ul className="list">
                                <li>HTML/CSS (ml. Bootstrap ja Bulma) <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span></li>
                                <li>Javascript (ml. jquery) <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span></li>
                                <li>React (ml. Node.js ja Rest apien
                                käyttö)
                        <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span></li>

                                <li>PHP <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span></li>
                                <li>SQL (ml. MySQL)<span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span></li>
                                <li>Wordpress  (ml. mm. Woocommerce) <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span></li>
                                <li>Ubuntu palvelin (ml. VirtualBox)<span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star  checked"></span>
                                    <span class="fa fa-star"></span></li>
                                <li>Vectori grafiikka: Coreldraw/Illustrator <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span></li>
                                <li>Kuvankäsittely: Photoshop<span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span></li>
                                <li>Mockup: Figma <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span></li>
                                <li>Editointi:Premire Pro/After Effects/Sony Vegas<span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span></li>
                                <li>3D mallinnus: Blender <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span></li>


                            </ul>

                        </Col>

                        <Col>
                            <ul className="list">
                                <li>C# <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span></li>
                                <li>Python <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span></li>
                                <li>C++ <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span></li>
                                <li>Kotlin <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span></li>
                                <li>AngularJS<span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span></li>
                                <li>Mobile app: PWA, OnsenUI
ja Corona <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span></li>
                                <li>React Native (ml. Android studio) <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span></li>
                                <li>Git (ml. Scrum) <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span></li>
                                <li>Magento <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span></li>
                                <li>
                                    Video- ja valokuvaus <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span></li>
                                <li>
                                    Puutyöt <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span></li>

                            </ul>

                        </Col>

                    </Row>
                </Container>
            </Jumbotron>

            <Jumbotron fluid className="titteli">
                <Container>
                    <h1 id="koulutus" className="text-center display-4 text-light ">Koulutus</h1>
                </Container>
            </Jumbotron>
            <Jumbotron fluid>

                <Container>


                    <h3>Mediatekniikan insinööri</h3>
                    <p>08/2017-1/2021</p>
                    <p>Tieto- ja viestintätekniikan insinöörin tutkinto meditekniikan suuntautumisella, Jyväskylän ammattikorkeakoulu</p>
                    <Button
                        onClick={() => setOpen(!open)}
                        aria-controls="AMKK"
                        aria-expanded={open}
                    >Todistus</Button>
                    <Collapse className="mt-4" in={open}>
                        <div id="AMKK">
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={AMKK1}
                                        alt="1"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={AMKK2}
                                        alt="2"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={AMKK3}
                                        alt="3"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </Collapse>
                </Container>
            </Jumbotron>
            <Jumbotron fluid>
                <Container>
                    <h3>Ict-asentaja</h3>
                    <p>08/2010-01/2014</p>
                    <p>Tieto- ja tietoliikennetekniikan perustutkinto (ict asentaja), Haapaveden ammattiopisto</p>
                    <Button
                        onClick={() => setOpen2(!open2)}
                        aria-controls="AMK"
                        aria-expanded={open2}
                    >Todistus</Button>
                    <Collapse className="mt-4" in={open2}>
                        <div id="AMK">
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={AMK1}
                                        alt="1"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={AMK2}
                                        alt="2"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={AMK3}
                                        alt="3"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={AMK4}
                                        alt="4"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={AMK5}
                                        alt="5"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </Collapse>
                </Container>
            </Jumbotron>



            <Jumbotron fluid className="titteli">
                <Container>
                    <h1 id="tyokokemus" className="text-center  display-4 text-light">Työkokemus</h1>
                </Container>
            </Jumbotron>
            <Jumbotron fluid>
                <Container>

                    <h3>TyöntaloNamo</h3>
                    <p>21.04.2015-20.07.2017</p>
                    <p>Työkuvaus:</p>
                    <ul className="list">
                        <li>Wordpressillä toteutettujen verkkosivun ylläpito, päivittäminen sekä uusien tuotteiden valokuvaus ja lisäys sivuille.</li>
                        <li>Mainos lehtisten suunnittelu, toteutus sekä tulostaminen Corel Draw ohjelmalla.</li>
                        <li>Video kuvaus ja editointi.</li>
                    </ul>
                    <p >
                        "Jesse on osoittanut hyvää taitoa ja osaamista itsenäisesti sekä ryhmässä" - Dennis Tammela
                    </p>
                </Container>
            </Jumbotron>

            

            <Jumbotron fluid>
                <Container>
                    <h3>Jyväskylän normaalikoulu: AMK työharjoittelu</h3>
                    <p>01.04.2020-30.09.2020</p>
                    <p>Työkuvaus:</p>
                    <ul className="list">
                        <li>Taitto ja graafinen suunnittelu useissa eri projekteissa Adoben sovelluksilla (Indesign, Illustrator, Photoshop ja Lightroom), Vuosikertomus kirja, Norssialbumi, julisteita, stipendejä yms.</li>
                        <li>Wordpressillä toteutettujen verkkosivun ylläpito, sekä uusien vuosikertomus artikkelien lisäys sivuille.</li>
                        <li>Norssiolympialaiset tapahtuman valokuvaus.</li>                        
                    </ul>
                </Container>
            </Jumbotron>



            <Jumbotron fluid className="titteli">
                <Container>
                    <h1 id="projekteja" className="text-center  display-4 text-light ">Projekteja</h1>
                </Container>
            </Jumbotron>

            <Jumbotron fluid>
                <Container>
                    <h3>Nimipäivät</h3>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Nimmarit}
                                alt="Nimipäiväsivuston etusivu"
                            />
                            <Carousel.Caption>
                                <h3 className="kuvateksti">Etusivu</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    <p  className="pt-3">Koulun opinnäytetyönä Preonille tehty nimipäivä sivusto. Sivusto on toteutettu pääosin PHP:llä ja SQL:llä, ja hieman JavaScriptilla. Sivuston teosta kirjoitettu opinnäytetyö löytyy osoitteesta: <a href="http://urn.fi/URN:NBN:fi:amk-202101251475">http://urn.fi/URN:NBN:fi:amk-202101251475</a>. Itse sivusto löytyy osoitteesta: <a href="https://www.paivyri.fi/info/nimipaivat/">https://www.paivyri.fi/info/nimipaivat/</a>.</p>
                </Container>
            </Jumbotron>


            <Jumbotron fluid>    
                <Container>
                    <h3>Wapice</h3>
                    <p>Koulun kolmannen vuoden projektina toteutin Wapicelle React pohjaisia prototyyppejä pörssisähkön hintaennusteiden sekä sähkönkulutusdatan visualisointiin.
                    Valitettavasti projektin tuotoksia koskee NDA, tästä johtuen projektin tuloksia ei voi esitellä.
                Wapice oli erittäin tyytyväinen projekti ryhmämme toimintaan ja tuotoksiin, ja he aikovat jatkokehittää protyypeistä julkaisukelpoisia versioita.</p>
                </Container>
            </Jumbotron>

            <Jumbotron fluid>
                <Container>
                    <h3>Eletorix</h3>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Eletorix1}
                                alt="Eletorixin etusivu"
                            />
                            <Carousel.Caption>
                                <h3 className="kuvateksti">Etusivu</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Eletorix}
                                alt="Eletorixin hakutulos sivu"
                            />

                            <Carousel.Caption>
                                <h3 className="kuvateksti">Hakutulokset sivu</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Eletorix3}
                                alt="Eletorixin tuotesivu"
                            />
                            <Carousel.Caption>
                                <h3 className="kuvateksti">Tuote sivu</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    <p  className="pt-3">Koulun toisen vuoden projektina tehty Tori.fin kaltainen kauppapaikka käytetylle elektroniikalle. Sivustot toteutettu pääosin PHP:llä ja SQL:llä, ja hieman javascriptilla. Tein itse myös kaikki projektissa olevat kuvakkeet ja logot.</p>
                </Container>
            </Jumbotron>

            <Jumbotron fluid>
                <Container>
                    <h3>Eletorix</h3>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Formula}
                                alt="3D F1"
                            />
                            <Carousel.Caption>
                                <h3 className="kuvateksti">3D Formula 1</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    <p  className="pt-3">Koulun valinnaisen 3D-kurssin projektina tehty F1-aiheinen 3D-mallinus autosta, työkaluista ja rakennuksista. 3d-mallinnus tehty Blender ohjelmalla.</p>
                </Container>
            </Jumbotron>

            <Jumbotron fluid>
                <Container>
                    <h3>Maapeli</h3>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Maapeli}
                                alt="Maapeli"
                            />
                            <Carousel.Caption>
                                <h3 className="kuvateksti">Maapeli</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    <p className="pt-3"> Koulun ensimmäisen vuoden projektina toteutettu JavaScript/Jquery pohjainen peli lapsille.</p>
                </Container>
            </Jumbotron>

            <Jumbotron fluid>
                <Container>
                    <h3>TyöntaloNamon esitteitä</h3>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Namo1}
                                alt="Trifold esite ulkosivut"
                            />
                            <Carousel.Caption>
                                <h3 className="kuvateksti">Trifold esitteen ulkosivut</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Namo3}
                                alt="Namo trifold esite sisä sivut"
                            />
                            <Carousel.Caption>
                                <h3 className="kuvateksti">Trifold esitteen sisäsivut</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Namo2}
                                alt="Avoimet ovet esite"
                            />
                            <Carousel.Caption>
                                <h3 className="kuvateksti">Avoimet ovet esite</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    <p className="pt-3">TyöntaloNamolla toteutettuja esitteitä.</p>
                </Container>
            </Jumbotron>

            <Jumbotron fluid>
                <Container>
                    <h3>Roki</h3>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Roki}
                                alt="Roki"
                            />
                            <Carousel.Caption>
                                <h3 className="kuvateksti">Roki</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    <p className="pt-3">Koulun videoeditointi kurssilla tehty Rocky parodia video, käyttäen aiemmin TyöntaloNamolle kuvaamiani materiaaleja.
                Pääosassa näyttelee Dennis Tammela. <a href="https://www.youtube.com/watch?v=xslfXvbqKrY">Linkki</a> </p>
                </Container>
            </Jumbotron>

            <Jumbotron fluid>
                <Container>
                    <h3>Puutöitä</h3>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Puu3}
                                alt="Jurassic Park"
                            />
                            <Carousel.Caption>
                                <h3 className="kuvateksti">Jurassic Park</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Puu1}
                                alt="Mad Max"
                            />
                            <Carousel.Caption>
                                <h3 className="kuvateksti">Mad Max</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Puu4}
                                alt="Super Mario"
                            />
                            <Carousel.Caption>
                                <h3 className="kuvateksti">Super Mario</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Puu2}
                                alt="NES"
                            />
                            <Carousel.Caption>
                                <h3 className="kuvateksti">8bit Nintendo ohjain</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    <p className="pt-3">Vapaa-ajalla toteutettuja puisia koristetauluja elokuva ja peli aiheilla.</p>
                </Container>
            </Jumbotron>

            <Jumbotron fluid className="titteli">
                <Container>
                    <h1 id="yhteystiedot" className="text-center display-4 text-light">Yhteystiedot</h1>
                </Container>
            </Jumbotron>
            <Jumbotron fluid>
                <Container>

                    <ul className="list">
                        <li>jesse.huttusen@hotmail.com</li>
                        <li>p. 044 264 8386</li>
                    </ul>
                </Container>
            </Jumbotron>


            <Container>
                <p className="pb-4">Copyright © 2021 Jesse Huttunen. </p>
                <p className="pb-4">Nämä sivut on kirjoitettu perus HTML/CSS:llä, Reactilla, Bootstrapilla ja julkaistu Githubin pages alustalla.</p>
            </Container>



        </div>

    );
}

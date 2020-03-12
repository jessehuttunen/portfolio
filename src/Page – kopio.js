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


export default function App() {
    return (
        <Router>
            <Navbar expand="lg">
                <Navbar.Brand><Link to="/" style={{ textDecoration: 'none' }}>Jesse Huttunen</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link><Link to="/mina">Minä</Link></Nav.Link>
                        <Nav.Link><Link to="/koulutus">Koulutus</Link></Nav.Link>
                        <Nav.Link><Link to="/skills">Osaaminen</Link></Nav.Link>
                        <Nav.Link><Link to="/tyokokemus">Työkokemus</Link></Nav.Link>
                        <Nav.Link><Link to="/projekteja">Projekteja</Link></Nav.Link>
                        <Nav.Link><Link to="/yhteystiedot">Yhteystiedot</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div>
                <Switch>
                    <Route path="/mina"> <Mina /> </Route>
                    <Route path="/koulutus"> <Koulutus /> </Route>
                    <Route path="/skills"> <Skills /> </Route>
                    <Route path="/tyokokemus"> <Tyokokemus /> </Route>
                    <Route path="/projekteja"> <Projekteja /> </Route>
                    <Route path="/yhteystiedot"> <Yhteystiedot /> </Route>
                    <Route path="/"> <Home /> </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return <div>
        <Container><h1>Etusivu</h1></Container>
        <Jumbotron fluid>
            <Container>
                <h1>Jesse Huttunen</h1>
                <p>Opiskelen parasta aikaa kolmatta vuotta mediatekniikan insinööriksi. Tavoitteenani on olla niin sanottu "joka paikan höylä", eli koitan kartuttaa osaamistani mahdollisimman laajalla skaalalla, niin koodi puolella kuin visuaalisemmallakin puolella.</p>
                <p>Toivottavasti löydät sivuilta hakemasi tiedot minusta, ja jos et, laita minulle rohkeasti viestiä:</p>
                <p>jesse.huttusen@hotmail.com</p>
                <p>044 264 8386</p>

            </Container>
        </Jumbotron>
    </div>;
}

function Mina() {
    return <div>
        <Container><h1>Minä</h1></Container>
        <Jumbotron fluid>
            <Container>
                <h3>Jesse Huttunen</h3>
                <ul className="list">
                    <li>Asuinpaikka: Jyväskylä</li>
                    <li>Lähtöisin Pyhäjärveltä</li>
                    <li>s. 30.03.1994</li>
                    <li>B ajokortti.</li>
                    <li>Englannin kielen taito hyvä</li>
                </ul>
                <p>Olen kolmannen vuoden mediatekniikan opiskelija Jyväskylän ammattikorkeakoulussa.</p>
                <p>Koodailusta minulla on kokemusta useilla eri kielillä. Mediateknikkona pääpaino verkkopohjaisissa kielissä kuten javascript, php, react ja sql. Hallitsen kuitenkin myös ohjelmointi kieliäkin kuten esim. C# ja Python.</p>
                <p>Tavoitteenani on olla niin sanottu "joka paikan höylä", eli ei ole merkitystä onko koodaus Front- vai Backendiä, koitan aina saada aikaiseksi mahdollisimman hyvää jälkeä.</p>
                <p>Pidän myös visuaalisesta työstä, graaffisesta-, UI- sekä UX suunnittelusta, video-/valokuvaus ja editointi, kuin myös 3D mallintamisestakin.</p>
                <p> Luonteeltani olen hiljainen, oma-aloitteinen, työmyyrä.</p>
                <p> Hyödyllisinä harrastuksina minulla on puutöiden teko, valo-/videokuvaus ja kaikenlainen tietokoneiden rassaus.</p>
                <p> Muina harrastuksina minulla on mm. eläimet, veneily/kalastus, elokuvat ja videopelit.</p>
            </Container>
        </Jumbotron>
    </div >;
}



function Koulutus() {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    return <div>
        <Container><h1>Koulutus</h1></Container>
        <Jumbotron fluid>
            <Container>
                <h3>Mediatekniikan insinööri</h3>
                <p>08/2017-xxxx</p>
                <p>Tieto- ja viestintätekniikan insinöörin tutkinto meditekniikan suuntautumisella, Jyväskylän ammattikorkeakoulu</p>
                <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="AMKK"
                    aria-expanded={open}
                >Todistus</Button>
                <Collapse in={open}>
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
                <Collapse in={open2}>
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
    </div>;
}




function Tyokokemus() {
    return <div>
        <Container><h1>Työkokemus</h1></Container>
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
            </Container>
        </Jumbotron>
    </div>;
}

function Skills() {
    return <div>
        <Container><h1>Osaaminen</h1></Container>
        <Jumbotron fluid>
            <Container>
                <p>Koulusta, töistä, sekä harrastuksista minulla on kokemusta mm. seuraavista aiheista:</p>
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

                </ul></Container>
        </Jumbotron>
    </div >;
}

function Projekteja() {
    return <div>
        <Container><h1>Projekteja</h1></Container>
        <Jumbotron fluid>
            <Container>
                <h3>Wapice</h3>
                <p>Koulun kolmannen vuoden projektina toteutin Wapicelle React pohjaisia prototyyppejä pörssisähkön hintaennusteiden sekä sähkönkulutusdatan visualisointiin.
                Valitettavasti projektin tuotoksia koskee NDA, tästä johtuen projektin tuloksia ei voi esitellä.
                Wapice oli erittäin tyytyväinen projekti ryhmämme toimintaan ja tuotoksiin, ja he aikovat jatko kehittää protyypeistä julkaisu kelpoisia versioita.</p>
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
                            <h3>Etusivu</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Eletorix}
                            alt="Eletorixin hakutulos sivu"
                        />

                        <Carousel.Caption>
                            <h3>Hakutulokset sivu</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Eletorix3}
                            alt="Eletorixin tuotesivu"
                        />
                        <Carousel.Caption>
                            <h3>Tuote sivu</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <p>Koulun toisen vuoden projektina tehty Tori.fin kaltainen kauppapaikka käytetylle elektroniikalle. Sivustot toteutettu pääosin PHP:llä ja SQL:llä, ja hieman javascriptilla. Tein itse myös kaikki projektissa olevat kuvakkeet ja logot.
                    <a href="https://student.labranet.jamk.fi/~L5321/ttms0700/eletorix/">https://student.labranet.jamk.fi/~L5321/ttms0700/eletorix/</a></p>
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
                            <h3>Maapeli</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <p> Koulun ensimmäisen vuoden projektina toteutettu javascript/jquery pohjainen peli lapsille.
                    <a href="https://student.labranet.jamk.fi/~L5321/Maapeli/Maapeli.html">https://student.labranet.jamk.fi/~L5321/Maapeli/Maapeli.html</a></p>
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
                            alt="Namo trifold esite ulkosivut"
                        />
                        <Carousel.Caption>
                            <h3>Namon trifold esitteen ulko sivut</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Namo3}
                            alt="Namo trifold esite sisä sivut"
                        />
                        <Carousel.Caption>
                            <h3>Namon trifold esitteen sisä sivut</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Namo2}
                            alt="Namo avoimet ovet esite"
                        />
                        <Carousel.Caption>
                            <h3>Namon avoimet ovet esite</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <p>TyöntaloNamolla toteutettuja esitteitä.</p>
            </Container>
        </Jumbotron>

        <Jumbotron fluid>
            <Container>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Puu3}
                            alt="Jurassic Park"
                        />
                        <Carousel.Caption>
                            <h3>Jurassic Park</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Puu1}
                            alt="Mad Max"
                        />
                        <Carousel.Caption>
                            <h3>Mad Max</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Puu4}
                            alt="Super Mario"
                        />
                        <Carousel.Caption>
                            <h3>Super Mario</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Puu2}
                            alt="NES"
                        />
                        <Carousel.Caption>
                            <h3>8bit Nintendo ohjain</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <h3>Puutöitä</h3>
                <p>Vapaa-ajalla toteutettuja puisia koristetauluja elokuva ja peli aiheilla.</p>
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
                            <h3>Roki</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <p>Koulun videoeditointi kurssilla tehty Rocky parodia video käyttäen aiemmin TyöntaloNamlle kuvaamiani materiaaleja.
                Pääosassa näyttelee Dennis Tammela. <a href="https://www.youtube.com/watch?v=xslfXvbqKrY">https://www.youtube.com/watch?v=xslfXvbqKrY</a> </p>
            </Container>
        </Jumbotron>

    </div>;
}

function Yhteystiedot() {
    return <div>
        <Container><h1>Yhteystiedot</h1></Container>
        <Jumbotron fluid>
            <Container>
                <ul className="list">
                    <li>jesse.huttusen@hotmail.com</li>
                    <li>p. 044 264 8386</li>
                </ul>
            </Container>
        </Jumbotron>
    </div>;
}
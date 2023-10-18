import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Z1000R from "../../Assets/Motors/z1000r.png"
import ZX10R from "../../Assets/Motors/zx10r.png"
import Z900 from "../../Assets/Motors/z900.png"
import GX750 from "../../Assets/Motors/gx750.png"
import GXS1000 from "../../Assets/Motors/gsx1000.png"
import GXR1000 from "../../Assets/Motors/Gsxr10000.png"
import MT009 from "../../Assets/Motors/mt09.png"
import MT07 from "../../Assets/Motors/mt07.png"
import R1 from "../../Assets/Motors/R1.png"
import MotoCards from "./MotoCards";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Toutes nos <strong className="purple">Motos </strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici notre large panel de motos 
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* Z1000 R */}
          <Col md={4} className="project-card">
            <MotoCards
              imgPath={Z1000R}
              title="Z1000 R"
              description="Les combats font rage dans la jungle des gros roadsters. Yamaha MT-10, KTM 1290 Superduke, Aprilia Tuono V4 et BMW S1000R... sont tant de créatures terrifiantes et déchaînées. Complétement dépassés par la violence des affrontements, les verts profitent de leur teinte pour rester tapis dans les feuillages. Soucieux de la survie de leur combattante, le clan d’Akashi a décidé d’affûter sa Z1000."
              link="https://www.kawasaki.fr/fr/products/Roadsters/2020/Z1000_R_Edition/overview?Uid=082FUF1aW1lfUVoKDAlZXA1RXVEJWl4KUFkNUFxYWFwNWQs"
            />
          </Col>

          {/* Zx10R */}
          <Col md={4} className="project-card">
            <MotoCards
              imgPath={ZX10R}
              title="Zx10R"
              description="Nouveau moteur, nouveau châssis, nouvelles suspensions, la Kawasaki ZX-10R revient cette année plus affûtée que jamais avec au programme un moteur qui, en version full power, dépasse la barre fatidique des 200 chevaux. La Superbike de Kawasaki s'équipe également d'un anti-patinage prédictif de type compétition (baptisé S-KTRC) ainsi que d'un dispositif ABS en option. Kawasaki annonce que cette moto représente la première refonte intégrale du modèle le plus sportif de sa gamme depuis son apparition."
              link="https://www.kawasaki.fr/fr/products/Sportives/2020/Ninja_ZX-10R_Performance/overview?Uid=084FXQ1bDFFfXlBaWl1YXFFRDlFcCVEKWlAODV0NW1hQXwk"
            />
          </Col>


          {/* Z900 */}
          <Col md={4} className="project-card">
            <MotoCards
              imgPath={Z900}
              title="Z900"
              description="En 2017, Kawasaki dit au revoir à son roadster sportif Z800 pour accueillir la Z900, cylindrée mythique du constructeur d’Akashi. Puissance, légèreté et accessibilité au programme pour cette nouvelle Z, qui ne sera plus disponible pour les permis A2…  Esthétiquement, on reste tout à fait dans l’esprit Z, l’ergonomie a été voulue accessible avec une selle peu élevée doublée d’une arcade très fine, et le guidon plat est un peu plus relevé que celui de la Z800. Les deux leviers sont réglables."
              link="https://www.kawasaki.ch/fr/products/Supernaked/2022/Z900/overview?Uid=08D2UAxQUQ1aUFBeWwwLXA5ZXgpaXlkJCw1QDAlQXltbDlo&gclid=CjwKCAjwy_aUBhACEiwA2IHHQNueVdEVky7hLCbs4tW7G3LRgXDY7cMo88EB21Hl8PAn3ewxSsaebBoCjI4QAvD_BwE"
            />
          </Col>


          {/* Gsxs 750  */}
          <Col md={4} className="project-card">
            <MotoCards
              imgPath={GX750}
              title="GSXS 750"
              description="Le roadster mid-size du constructeur d’Hamamatsu se voit donc débaptisé pour 2017 : de GSR, il devient GSX-S, comme ses grandes sœurs 1000 cm3 sorties en 2015 (GSX-S 1000 S et GSX-S 1000 F). En bonne et légitime héritière des gènes de Gex. La nouvelle GSX-S 750 reprend la bonne base de la GSR 750, sortie tout début 2011 et qui a remporté un franc succès dans l’Hexagone."
              link="https://moto.suzuki.ch/fr?gclid=CjwKCAjwy_aUBhACEiwA2IHHQCvITwLreZAowE1sfN61fo_-yzePqhmRmQ6bQV7exUAvQHzPqdSl9hoClnAQAvD_BwE"
            />
          </Col>


          {/* GSXR1000 */}
          <Col md={4} className="project-card">
            <MotoCards
              imgPath={GXR1000}
              title="GSXR1000"
              description="Revue de fond en comble en 2017, la GSX-R 1000 se dote de quelques évolutions intéressantes pour son millésime 2019 : il s’agit tout d’abord de l’axe du bras oscillant de la R, revu pour répondre aux règlement des compétitions SBK. Ce modèle haut de gamme bénéficie également d’une nouvelle monte d’origine, les nouveaux Bridgestone Battlax Racing Street RS11, et d’une modification du système de freinage avec l’adoption de Durit tressées inox, plus endurantes. "
              link="https://moto.suzuki.ch/fr"
            />
          </Col>
          

          {/* GSXS1000*/}
          <Col md={4} className="project-card">
            <MotoCards
              imgPath={GXS1000}
              title="GSXS1000"
              description="Apparue en 2015, la GSX-S 1000 vit enfin son renouveau en 2021 dans la foulée du passage à la norme Euro5. La base moteur est identique, mais une mise à jour du profil d'arbre à cames, des nouveaux ressorts de soupapes, d'un nouvel embrayage, d'un nouveau système d'échappement, et d'une structure interne de boîte à air modifiée permettent d'augmenter la puissance à 152 ch à 11 000 tr/min (+2 ch, à 1000 tours de plus)."
              link="https://moto.suzuki.ch/fr?gclid=CjwKCAjwy_aUBhACEiwA2IHHQCvITwLreZAowE1sfN61fo_-yzePqhmRmQ6bQV7exUAvQHzPqdSl9hoClnAQAvD_BwE"
            />
          </Col>
          

          {/* Mt09 */}
          <Col md={4} className="project-card">
            <MotoCards
              imgPath={MT009}
              title="MT09"
              description="Sortie fin 2013, la Yamaha MT-09 a connu une belle carrière avec plus de 50 000 exemplaires vendus. Pour 2021, à l'occasion de son passage à Euro 5, la MT-09 évolue en profondeur : le moteur passe de 845 à 889 cm3, gagne à la fois en puissance (119 ch au lieu de 115) et en couple (93 Nm au lieu de 87,5, de surcroit disponibles 1500 tr/mn plus bas). Bref, le caractère moteur, qui faisait déjà partie des qualités de la moto, devrait être encore au rendez-vous."
              link="https://web.yamaha-motor.ch/fr/mt-09?gclid=CjwKCAjwy_aUBhACEiwA2IHHQLg0Nshsyv8mdFf3us2W1TYaSoWJ5i1tHjcrXsdLdi0PtdZexRCQHBoCIdQQAvD_BwE"
            />
          </Col>


          {/* MT07 */}
          <Col md={4} className="project-card">
            <MotoCards
              imgPath={MT07}
              title="MT07"
              description="Entrer dans l'ère MT, symbolisant le renouveau de Yamaha, c'est accepter un look osé et une moto aussi séduisante qu'osée stylistiquement. Voici donc après le 'grosse' et tumultueuse MT-09 à moteur 3 cylindres, un bicylindre des plus prometteur quel que soit votre degré d'expérience. Les esprits chagrins remarqueront un petit réservoir de 14 litres, mais de nos jours, cette contenance suffit à parcourir près de 275 km si on y met les formes... "
              link="https://www.yamaha-motor.eu/fr/fr/products/motos/hyper-naked/mt-07-2022/"
            />
          </Col>

          {/* R1 */}

          <Col md={4} className="project-card">
            <MotoCards
              imgPath={R1}
              title="R1"
              description="Plus que toutes autres sportives, la Yamaha R1 manquait clairement d’une assistance électronique type contrôle de traction pour mettre en exergue ses qualités dynamiques et son excellent moteur. Voilà qui est fait sur ce millésime 2012, qui cependant ne révolutionnera en aucun cas le segment des superbikes. "
              link="https://www.yamaha-motor.eu/ch/fr/products/motorcycles/supersport/r1-2022/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

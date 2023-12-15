import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import mampang from "../../Assets/img/portfolio/mampang1.jpg";
import rjb from "../../Assets/img/portfolio/perjuanganterpadu.jpg";
import pancoranmas from "../../Assets/img/portfolio/carkabuana.jpg";
import depok from "../../Assets/img/portfolio/haraki.png";
import rj from "../../Assets/img/portfolio/hamidiyah.jpg";
import depokjaya from "../../Assets/img/portfolio/depok1.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          List of <strong className="purple">Schools </strong>
        </h1>
        <p style={{ color: "white" }}>
          The following is a list of schools in Pancoran Mas Depok based on Wards.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={depok}
              isBlog={false}
              title="Depok"
              description="SD NEGERI DEPOK 1, SD NEGERI DEPOK 2, SD NEGERI DEPOK 4, SD NEGERI DEPOK 5, SD NEGERI DEPOK 6, SD NEGERI PANCORANMAS 1, SD HOLY FAITHFUL OBEDIENT, SD ISLAM AL FAUZIEN, SD IT AL HARAKI, SD IT AL QALAM, SD KRISTEN TUNAS BANGSA DEPOK, SD MARDI YUANA, SD NASIONAL PLUS TUNAS GLOBAL, SD PELITA, SD RABBANI DEPOK, SD SILOAM"
              mapsLink="https://www.google.co.id/maps/place/Depok,+Pancoran+Mas,+Depok+City,+West+Java/@-6.4013064,106.8035862,14z/data=!3m1!4b1!4m6!3m5!1s0x2e69ebe75666fcd5:0x74722dfb984effe2!8m2!3d-6.3990337!4d106.8207875!16s%2Fg%2F121dcvz8?entry=ttu"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={depokjaya}
              isBlog={false}
              title="Depok Jaya"
              description="SD NEGERI ANYELIR 1, SD NEGERI ANYELIR 2, SD NEGERI BEJI 1, SD NEGERI DEPOK BARU 1, SD NEGERI DEPOK BARU 2, SD NEGERI DEPOK BARU 3, SD NEGERI DEPOK BARU 8, SD NEGERI DEPOK JAYA 1, SD IT MUTIARA ISLAM, SDIT ALMUHAJIRIN, SD SANTA THERESIA"
              mapsLink="https://www.google.co.id/maps/place/Depok+Jaya,+Pancoran+Mas,+Depok+City,+West+Java/@-6.3935038,106.7921708,15z/data=!3m1!4b1!4m6!3m5!1s0x2e69e95a384a1dc3:0xd06b53bb7a8a85d!8m2!3d-6.392974!4d106.8104633!16s%2Fg%2F120r4vcm?entry=ttu"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pancoranmas}
              isBlog={false}
              title="Pancoran Mas"
              description="SD NEGERI PANCORANMAS 3, SD NEGERI PITARA 1, SD NEGERI PITARA 2, SD KWITANG 8 PSKD, SDS EUREKA NATIONAL PLUS, SDS CAKRA BUANA"
              mapsLink="https://www.google.co.id/maps/place/Kelurahan+Pancoran+Mas/@-6.4066883,106.7855959,15z/data=!3m1!4b1!4m6!3m5!1s0x2e69e968cf725ec5:0xbe3a0f31fd4d9992!8m2!3d-6.40671!4d106.80405!16s%2Fg%2F11gnq819xg?entry=ttu"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mampang}
              isBlog={false}
              title="Mampang"
              description="SD NEGERI MAMPANG 1, SD NEGERI MAMPANG 2, SD NEGERI MAMPANG 3, SD Muhammadiyah 10"
              mapsLink="https://www.google.co.id/maps/place/Mampang,+Pancoran+Mas,+Depok+City,+West+Java/@-6.3910025,106.7577792,14z/data=!3m1!4b1!4m6!3m5!1s0x2e69e94818c3b203:0xb97c58e1a66c98c0!8m2!3d-6.3895745!4d106.79719!16s%2Fg%2F121slg_7?entry=ttu"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rj}
              isBlog={false}
              title="Rangkapan Jaya"
              description="SD CINTA ANAK, SD ISLAM DARUTTAQWA, SD IT AL HAMIDIYAH, SD PERJUANGAN TERPADU, SD PRESTASI GLOBAL, SD T CAHAYA HATI, SDIT ALMANSHURIYAH, SDIT Nuurul Jamaal"
              mapsLink="https://www.google.co.id/maps/place/Rangkapan+Jaya,+Pancoran+Mas,+Depok+City,+West+Java/@-6.3992555,106.7888555,14z/data=!3m1!4b1!4m6!3m5!1s0x2e69e93e9bb040d9:0x7d2f7757f46d2d22!8m2!3d-6.3899682!4d106.7853922!16s%2Fg%2F122h6np2?entry=ttu"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rjb}
              isBlog={false}
              title="Rangkapan Jaya Baru"
              description="SD NEGERI PARUNG BINGUNG 1, SD NEGERI RANGKAPAN JAYA BARU, SD NEGERI RAWADENOK, SD MUHAMMADIYAH 2 DEPOK, SDS IT SAID YUSUF, SEKOLAH ALAM INDONESIA CABANG MERUYUNG, SD ISLAM AL - IHYA, SD Islam Dai An Nur, SDIT ARRAHMAH, SDIT TASMIRA"
              mapsLink="https://www.google.co.id/maps/place/Rangkapan+Jaya+Baru,+Pancoran+Mas,+Depok+City,+West+Java/@-6.400139,106.7793195,14z/data=!3m1!4b1!4m6!3m5!1s0x2e69e923aa2d794d:0xb84dd9f1a132861!8m2!3d-6.3903616!4d106.773595!16s%2Fg%2F1229d5th?entry=ttu"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

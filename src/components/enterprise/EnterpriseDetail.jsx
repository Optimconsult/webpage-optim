import { enterpriseData } from "./Enterprise";
import { Partner } from "./Partner";
import userOne from "/user-one.jpeg";
import userTwo from "/user-two.jpeg";
import userThree from "/user-three.jpeg";
import userFour from "/user-four.jpeg";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function EnterpriseDetail() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="scroll font-poppins md:pl-6 pb-20">
      <div className="pt-10 mx-6 md:mx-8 lg:mx-20">
        <h2 className="text-6xl md:text-7xl text-center lg:text-start font-semibold">
          {enterpriseData.name}
        </h2>
        <p className="mt-14 md:pl-4 lg:pl-0 mb-14 text-xl text-justify tracking-tight leading-tight md:w-[97%]">
          {enterpriseData.description}
        </p>
        <h2 className="text-[35px] text-center md:text-start font-semibold mb-12">
          {enterpriseData.partners}
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-y-20 md:gap-y-32 md:px-10">
        <Partner
          image={userOne}
          name="Eduardo Uribe"
          description={
            "Ingeniero Agrónomo, M.Sc. en química de suelos (Virginia Tech.) y Ph.D. en fertilidad de suelos tropicales (North Carolina state university). Ha sido director de sostenibilidad del grupo energía de Bogotá, vicepresidente de sostenibilidad de Ecopetrol, director de política ambiental del departamento nacional de planeación (DNP), viceministro del medio ambiente y director del departamento técnico administrativo del medio ambiente de Bogotá. trabajó en la universidad de los andes como coordinador del programa de economía ambiental y evaluación de proyectos de la facultad de economía y como investigador del centro de estudios económicos (CEDE); y fue director del centro de estudios ganaderos y agrícolas (CEGA)."
          }
        />
        <hr className="w-3/5 mx-auto border-black md:hidden" />

        <Partner
          image={userTwo}
          name="Jaime Bermúdez"
          description={
            "Abogado (Universidad de los Andes), Ph.D. en ciencia política (Universidad de Oxford). Ha sido consultor privado en estrategia de comunicaciones, asesor de la presidencia de la república, embajador y ministro de relaciones exteriores. Durante los últimos años se desempeñó como presidente de Lazard (Banco de inversión) en Colombia, miembro de varias juntas directivas, del consejo superior de la universidad de los Andes y otras organizaciones sin ánimo de lucro."
          }
        />
        <hr className="w-3/5 mx-auto border-black md:hidden" />
        <Partner
          image={userThree}
          name="Santiago Arango"
          description={
            "Ingeniero ambiental (Universidad de los andes), con posgrado en gerencia de proyectos y especialización en análisis de políticas públicas (Universidad nacional). Ha sido asesor del ministerio de ambiente y desarrollo sostenible de parques naturales nacionales y de la secretaría distrital de ambiente de Bogotá, cuenta con amplia experiencia en proyectos de mitigación y adaptación al cambio climático, evaluaciones ambientales de acuerdo a estándares de desempeño nacionales e internacionales, desarrollo de instrumentos de gestión ambiental y social y formulación y evaluación de políticas públicas ambientales para varias agencias estatales."
          }
        />
        <hr className="w-3/5 mx-auto border-black md:hidden" />
        <Partner
          image={userFour}
          name="Julián Páez"
          description={
            "Abogado (Universidad pedagógica y tecnológica de Colombia), especialista en derecho público (Universidad nacional), gestión pública (Universidad de los Andes) y maestrías en gerencia y práctica del desarrollo y gerencia ambiental (Universidad de los Andes). Ha sido asesor de la corte constitucional, la alcaldía mayor de Bogotá, los ministerios de trabajo, interior, minas y energía y en este último se desempeñó como secretario general, subdirector administrativo y financiero, jefe de tecnologías de la información y comunicaciones, así como fué miembro de las juntas de cedelca, urrá y la empresa colombiana de gas, ecogas."
          }
        />
      </div>
    </div>
  );
}

export default EnterpriseDetail;

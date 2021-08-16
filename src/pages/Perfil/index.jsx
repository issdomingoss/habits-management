import { ContainerPerfil, CardPerfil } from "./style";
import { AiFillEdit } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";

import Header from "../../components/header";

const PerfilPage = () => {
  return (
    <>
      <ContainerPerfil>
        <Header />

        <CardPerfil>
          <div className="containerIcon">
            <AiFillEdit className="editIcon" />
          </div>
          <div className="userImgContainer">
            <FaUserAlt className="userImg" />
          </div>
          <div>
            <h1>Nome</h1>
            <div>Email@email.com</div>
          </div>
        </CardPerfil>
      </ContainerPerfil>
    </>
  );
};

export default PerfilPage;

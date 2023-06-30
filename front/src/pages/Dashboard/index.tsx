import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { Container, Header, Main, Nav } from "../../components/dashboard";
import ModalAddTech from "../../components/modalAddContact";
import { FaEdit, FaTrash } from "react-icons/fa";
import ModalEditContact from "../../components/modalEditContact";
import { iContact } from "../../interfaces/contacts";
import ModalEditUser from "../../components/modalEditUser";

export default function Dashboard() {
  const {
    user,
    loading,
    logoutDash,
    userContacts,
    removeContact,
    newContactModalToggle,
    setnewContactModalToggle,
    openModalEditContact,
    setOpenModalEditContact,
    setContactEdit,
    setEditUserModalToggle,
    editUserModalToggle,
    deleteUser,
  } = useContext(AuthContext);

  const openModalTechNew = () => setnewContactModalToggle(true);
  const openModalContactEdit = (data: iContact) => {
    setContactEdit(data.id);
    setOpenModalEditContact(true);
  };
  const openModalEditUser = () => setEditUserModalToggle(true);

  if (loading) {
    return null;
  }

  return (
    <>
      {user ? (
        <>
          {newContactModalToggle && (
            <ModalAddTech setnewContactModalToggle={setnewContactModalToggle} />
          )}
          {openModalEditContact && (
            <ModalEditContact
              setOpenModalEditContact={setOpenModalEditContact}
            />
          )}
          {editUserModalToggle && (
            <ModalEditUser setEditUserModalToggle={setEditUserModalToggle} />
          )}
          <Container>
            <Header>
              <h2>Contacts Hub</h2>
              <button onClick={logoutDash}>Sair</button>
            </Header>
            <hr />
            <Nav>
              <h2>Olá , {user.name}</h2>
              <div>
                <button onClick={() => deleteUser()}>
                  <FaTrash />
                </button>
                <button onClick={openModalEditUser}>
                  <FaEdit />
                </button>
              </div>
            </Nav>
            <hr />
            <Main>
              <div className="headerTech">
                <h2>Contacts</h2>
                <button onClick={openModalTechNew}>+</button>
              </div>

              {userContacts.length >= 1 ? (
                <ul className="techsList">
                  {userContacts.map((elem, index) => (
                    <li key={index}>
                      <h3>{elem.name}</h3>
                      <div>
                        <p>{elem.email}</p>
                        <p>{elem.phone_number}</p>
                      </div>
                      <button
                        id={elem.id}
                        onClick={() => removeContact(elem.id)}
                      >
                        <FaTrash />
                      </button>
                      <button onClick={() => openModalContactEdit(elem)}>
                        <FaEdit />
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="listEmpty">
                  <h2>
                    Que pena! Voce ainda não tem nehum Contato na sua conta :(
                  </h2>
                  <h3>Pode estar adicionando ao clicar no +</h3>
                </div>
              )}
            </Main>
          </Container>
        </>
      ) : (
        <Navigate to={"/"} replace />
      )}
    </>
  );
}

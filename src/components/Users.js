import Head from "./Head";

import "../users.css";
import Btn from "./Btn";
export default function Users() {
  const users = JSON.parse(localStorage.getItem("users"));
  return (
    <div>
      <Head
        btnType="link"
        head="Users List"
        btnTxt="Creat New User"
        btnLink="/create_user"
      />
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Address</th>
            <th scope="col">Married</th>
            <th scope="col">Hobbies</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index}>
                <td>1</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.address}</td>
                <td>{user.is_married ? "Yes" : "No"}</td>
                <td>
                  <span className="hobbies">
                    {user.hobbies.map((hob, ind) => {
                      return <span key={ind}>{hob}</span>;
                    })}
                  </span>
                </td>
                <td>
                  <Btn
                    btnType="link"
                    link="edit_user/1"
                    color="success"
                    text="edit"
                  />
                  <Btn btnType="btn" color="info" text="delete" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

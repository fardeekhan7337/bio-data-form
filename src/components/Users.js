import Head from "./Head";

export default function Users() {
  return (
    <div>
      <Head
        btnType="link"
        head="Users List"
        btnTxt="Creat New User"
        btnLink="/create_user"
      />
    </div>
  );
}

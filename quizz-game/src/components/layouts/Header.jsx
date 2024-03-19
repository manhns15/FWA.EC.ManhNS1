const Header = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  return (
    <>
      <div className="quiz-heading">
        <div className="quiz-heading__avt">
          <img src={userData.avatar_link} alt="" />
        </div>
      </div>
    </>
  );
};

export default Header;

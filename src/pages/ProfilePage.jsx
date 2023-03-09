import profileImage from "../assets/image/profile-image.png";
import defaultAvatar from "../assets/image/default-avatar.png";
import Footer from "../components/Footer/Footer";

const ProfilePage = () => {
  return (
    <>
      <section className="profile">
        <div className="osnova__profile">
          <div className="profile__header-information">
            <div className="header-background">
              <img src={profileImage} alt="" className="background-image" />
            </div>
            <div className="header-avatar">
              <img src={defaultAvatar} alt="" className="avatarProfile" />
            </div>
          </div>
          <div className="profile__footer-information">
            <div className="leftside-information">
              <p className="p-profile-information">
                <span className="span-profile-information">Фамилия:</span>{" "}
                Музафаров
              </p>
              <p className="p-profile-information">
                <span className="span-profile-information">Имя:</span> Раиль
              </p>
              <p className="p-profile-information">
                <span className="span-profile-information">Отчество:</span>{" "}
                Рафаэлевич
              </p>
            </div>
            <div className="rightside-information">
              <p className="p-profile-information">
                <span className="span-profile-information">Телефон:</span>{" "}
                89027187582
              </p>
              <p className="p-profile-information">
                <span className="span-profile-information">Адрес:</span> г.
                Альмьевск
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProfilePage;

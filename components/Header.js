const Header = props => (
  <div className="font-weight-bold padding-left-med padding-right-med padding-top-sml">
    <img className="top-sml image-med image-circle" src="/images/logo.png" />
    <p className=" margin-left-med inline-block">Browse Mysteries</p>
    <p className=" margin-left-med inline-block">Submit A Mystery</p>
    <div className="float-right">
      <div className="margin-right-med inline-block">Search Box</div>
      <p className="margin-right-sml inline-block">Detective Dani</p>
      <img className="top-sml image-med image-circle" src="/images/avatar.jpeg" />
    </div>
  </div>
);

export default Header;

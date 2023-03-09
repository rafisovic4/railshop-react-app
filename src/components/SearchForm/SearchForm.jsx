const SearchForm = () => {
  return (
    <div className="searchForm-block">
      <div className="osnova__search-form">
        <div className="search--title">
          <p className="search-p">
            ПОДПИШИТЕСЬ НА НАШУ РАССЫЛКУ И УЗНАВАЙТЕ <br /> О НАШИХ АКЦИЯХ{" "}
            <span className="search-span"> САМЫМИ ПЕРВЫМИ </span>
          </p>
        </div>
        <form className="searchForm">
          <input
            type="text"
            className="formInput"
            placeholder="avavionmvm@gmail.com"
          />
          <input type="submit" className="formSubmit" value="Подписаться" />
        </form>
      </div>
    </div>
  );
};

export default SearchForm;

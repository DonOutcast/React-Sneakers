import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <header>
        <div className='headerLeft'>
          <img width={40} height={40} src="/img/logo.png"/>
          <div className='headerInfo'>
            <h3 className='titleH3'>React Sneakers</h3>
            <p>Магазин лучших кросовок</p>
          </div>
        </div>
        <ul className='headerRight'>
          <li className="firstLi">
            <img src='/img/user.svg' width={18} height={18}/>
            <span>1205 руб.</span>
          </li>
          <li>
            <img src='/img/cart.svg' width={18} height={18}/>
          </li>
        </ul>
      </header>
      <div className='content'>
        <h1 className='titleH1'>Все кросовки</h1>

        <div className='sneakersCards'>
        <div className="card">
          <img src='/img/sneakers/1.jpg' width={133} height={112}/>
          <h5>Мужские кросовки Nike Blazer Mid Suede</h5>
          <div className='cardButtom'>
            <div>
              <span>Цена:</span>
              <b>12 999 руб.</b>

            </div>
            <button className='button'>
              <img src='/img/plus.svg' alt='Plus' width={11} height={11}/>
            </button>
          </div>
        </div>

        <div className="card">
          <img src='/img/sneakers/2.jpg' width={133} height={112}/>
          <h5>Мужские кросовки Nike Blazer Mid Suede</h5>
          <div className='cardButtom'>
            <div>
              <span>Цена:</span>
              <b>12 999 руб.</b>

            </div>
            <button className='button'>
              <img src='/img/plus.svg' alt='Plus' width={11} height={11}/>
            </button>
          </div>
        </div>

        <div className="card">
          <img src='/img/sneakers/3.jpg' width={133} height={112}/>
          <h5>Мужские кросовки Nike Blazer Mid Suede</h5>
          <div className='cardButtom'>
            <div>
              <span>Цена:</span>
              <b>12 999 руб.</b>

            </div>
            <button className='button'>
              <img src='/img/plus.svg' alt='Plus' width={11} height={11}/>
            </button>
          </div>
        </div>

        <div className="card">
          <img src='/img/sneakers/4.jpg' width={133} height={112}/>
          <h5>Мужские кросовки Nike Blazer Mid Suede</h5>
          <div className='cardButtom'>
            <div>
              <span>Цена:</span>
              <b>12 999 руб.</b>

            </div>
            <button className='button'>
              <img src='/img/plus.svg' alt='Plus' width={11} height={11}/>
            </button>
          </div>
        </div>
        

        </div>

      </div>
    </div>
  );
}

export default App;

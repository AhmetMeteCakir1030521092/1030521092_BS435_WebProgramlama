import './App.css';
import React from "react";
import button from "react-bootstrap/Button";
import logo from './logo.svg';
function App() {
  const tahminhakki = 5;
  const baslangic = 1;
  const bitis = 20;
  const url = "https://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg"

  return (

    <div className="App">,
      <header className="App-header">
      <h1>Merhaba!</h1>
        <image>hi </image>

        </header>
        Sayı tahmin etme oyununa hoşgeldin!..
          Oyunumuz kısaca şöyle;
            <p> - {baslangic} ile {bitis} arasında bir sayı tutacağız.</p>
          - Toplam tahmin etme hakkın : {tahminhakki}
          <p> - Her tahmin sonrası ipucu alacaksın.</p>
          <p> - Oyun bitiminde tekrar oyna butonuna basarak tekrar oynayabilirsin.. İyi eğlenceler!..</p>
            <button type="button" class="btn btn-btn-primary">Oyuna Başla</button>

    </div>
  );
}

export default App;

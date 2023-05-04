document.querySelector("#getMember").addEventListener("click", loadMember);

function loadMember() {
  var loadImage = document.querySelector("#loading");
  loadImage.style.display = "block"; // button a tıkladığımız an görünür hale gelir

  const xhr = new XMLHttpRequest();

  xhr.open("GET", "members.json", true);

  setTimeout(() => {
    // sorgunun sonlandığını bize söylüyor
    xhr.onload = function () {
      loadImage.style.display = "none"; // işlem tamamlandığı zaman kaybolur

      if (this.status === 200) {
        let members = JSON.parse(this.responseText);

        let html = ""; // bunu yapmzasak ilk eleman undefined alır. ilk elemanı boş yaptık şimdi
        members.forEach((member) => {
          html += `
                        <tr>
                            <td>${member.firstName}</td>
                            <td>${member.lastName}</td>
                            <td>${member.age}</td>
                            <td>${member.member}</td>
                        </tr>`;
        });

        document.querySelector("#members").innerHTML = html;
      }
    };
    xhr.send();
  }, 2500);
}

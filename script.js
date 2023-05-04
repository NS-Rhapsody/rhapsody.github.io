function knowledge(evt, Tecnology) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(Tecnology).style.display = "block";
    evt.currentTarget.className += " active";
  }

  let deleteBackrooms = () => {
    window.open("https://gx.games/pt-br/games/upt4sd/pongjfagf/tracks/c5d41193-0a36-44c8-808d-0250c43a3275/")
  }
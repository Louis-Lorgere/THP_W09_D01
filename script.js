
function exercice_01()
{
  let click_count = 0;

  function show_click_footer()
  {
    click_count += 1;
    console.log("Clic numéro " + click_count);
  }

  let footer_element = document.getElementsByTagName("footer")[0];
  footer_element.addEventListener("click", show_click_footer);
}

function exercice_02()
{
  let hamburger_icon = document.getElementsByClassName("navbar-toggler")[0];
  hamburger_icon.addEventListener("click", function(){
    let navbar_element = document.getElementById("navbarHeader");
    navbar_element.classList.toggle("collapse");
  })
  
}

function exercice_03()
{
  let first_card = document.getElementsByClassName("card mb-4 box-shadow")[0];
  let editBTN = first_card.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];
  editBTN.addEventListener("click", function(){
    first_card.style.color = "red";
  })
}

function exercice_04()
{
  let second_card = document.getElementsByClassName("card mb-4 box-shadow")[1];
  let editBTN = second_card.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];
  editBTN.addEventListener("click", function(){
    if (second_card.style.color === "green")
      second_card.style.color = "";
    else
      second_card.style.color = "green";
  })
}

function exercice_05()
{
  let show = 0;
  let header_navbar = document.getElementsByTagName("header")[0];
  header_navbar.addEventListener("dblclick", function(){
   let link_bootstrap = document.getElementsByTagName("link")[0];
   if (show === 0)
   {
    link_bootstrap.removeAttribute("rel");
    show = 1;
   }
   else
   {
     link_bootstrap.setAttribute("rel", "stylesheet");
     show = 0;
   }

  })
}

function exercice_06()
{
  // let cards = document.getElementsByClassName("card mb-4 box-shadow");
  let cards = document.querySelectorAll('div.card');
  let i = 0;
  console.log (cards.length)
  while (i < cards.length)
  {
    let card = cards[i];
    let card_img = card.getElementsByTagName("img")[0];
    let card_text = card.getElementsByTagName("p")[0];
    let editBTN = card.getElementsByClassName("btn btn-sm btn-success")[0];
    editBTN.addEventListener("mouseover", function(){
      
      card.classList.toggle('reduce');
      if (card.classList.contains('reduce'))
      {
        card_img.style.width = "20%";
        card_text.style.display = "none";
      }
      else
      {
        card_img.style.width="";
        card_text.style.display="";
      }
    })
    i++;
  }
}


exercice_01();
exercice_02();
exercice_03();
exercice_04();
exercice_05();
exercice_06();


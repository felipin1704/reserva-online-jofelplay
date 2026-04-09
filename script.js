// ===============================
// CONFIGURAÇÃO WHATSAPP
// ===============================
const TELEFONE = "5533999296276";

// ===============================
// FORMULÁRIO DE RESERVA
// ===============================
const form = document.getElementById("formReserva");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;

    const dia = document.getElementById("dia").value;
    const mes = document.getElementById("mes").value;
    const ano = document.getElementById("ano").value;

    const dataNascimento = `${dia}/${mes}/${ano}`;

    const dataReserva = document.getElementById("data").value;
    const horario = document.getElementById("horario").value;
    const tipo = document.getElementById("tipo").value;

    // ===============================
    // MENSAGEM WHATSAPP
    // ===============================
    const mensagem = `
🎮 *Nova Reserva - JOFEL PLAY*

👤 Nome: ${nome}
📞 Telefone: ${telefone}
🎂 Nascimento: ${dataNascimento}

📅 Data: ${dataReserva}
⏰ Horário: ${horario}
🎮 Tipo: ${tipo}

Aguardando confirmação 👊
    `;

    const url = `https://wa.me/${TELEFONE}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
  });
}

// ===============================
// BOTÃO SCROLL SUAVE
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// ===============================
// ANIMAÇÃO DO MASCOTE (leve)
// ===============================
const mascote = document.querySelector(".mascote-flutuante");

if (mascote) {
  let angle = 0;

  setInterval(() => {
    angle += 0.05;
    mascote.style.transform = `translateY(${Math.sin(angle) * 5}px)`;
  }, 30);
}

// ===============================
// EFEITO BOTÃO (pulse)
// ===============================
const btn = document.querySelector(".btn-principal");

if (btn) {
  setInterval(() => {
    btn.classList.toggle("pulse");
  }, 2000);
}

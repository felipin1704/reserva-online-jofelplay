document.addEventListener("DOMContentLoaded", () => {
  const reservaForm = document.getElementById("reservaForm");

  if (reservaForm) {
    const telefone = document.getElementById("telefone");
    const whatsapp = document.getElementById("whatsapp");
    const cpf = document.getElementById("cpf");
    const cep = document.getElementById("cep");

    telefone?.addEventListener("input", () => {
      telefone.value = formatPhone(telefone.value);
    });

    whatsapp?.addEventListener("input", () => {
      whatsapp.value = formatPhone(whatsapp.value);
    });

    cpf?.addEventListener("input", () => {
      cpf.value = formatCPF(cpf.value);
    });

    cep?.addEventListener("input", () => {
      cep.value = formatCEP(cep.value);
    });

    reservaForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const numeroDestino = "5533999296276";

      const nome = document.getElementById("nome").value.trim();
      const telefoneValor = document.getElementById("telefone").value.trim();
      const whatsappValor = document.getElementById("whatsapp").value.trim();
      const cpfValor = document.getElementById("cpf").value.trim();
      const nascimento = document.getElementById("nascimento").value;
      const cepValor = document.getElementById("cep").value.trim();
      const cidade = document.getElementById("cidade").value.trim();
      const rua = document.getElementById("rua").value.trim();
      const numero = document.getElementById("numero").value.trim();
      const bairro = document.getElementById("bairro").value.trim();
      const complemento = document.getElementById("complemento").value.trim();
      const dataReserva = document.getElementById("dataReserva").value;
      const horaReserva = document.getElementById("horaReserva").value;
      const tipoLocacao = document.getElementById("tipoLocacao").value;
      const manetes = document.getElementById("manetes").value;
      const retirada = document.getElementById("retirada").value;
      const pagamento = document.getElementById("pagamento").value;
      const observacoes = document.getElementById("observacoes").value.trim();

      const mensagem = `*NOVA SOLICITAÇÃO DE RESERVA - JOFEL PLAY LOCAÇÕES*

*Nome:* ${nome}
*Telefone:* ${telefoneValor}
*WhatsApp:* ${whatsappValor}
*CPF:* ${cpfValor}
*Nascimento:* ${formatDateBR(nascimento)}

*Endereço:* ${rua}, ${numero} - ${bairro}
*Cidade:* ${cidade}
*CEP:* ${cepValor}
*Complemento:* ${complemento || "Não informado"}

*Data:* ${formatDateBR(dataReserva)}
*Hora:* ${horaReserva}
*Tipo:* ${tipoLocacao}
*Manetes:* ${manetes}
*Entrega/Retirada:* ${retirada}
*Pagamento:* ${pagamento}

*Observações:* ${observacoes || "Nenhuma"}

⚠️ Essa reserva ainda será analisada e confirmada pela JOFEL PLAY via WhatsApp.`;

      const url = `https://wa.me/${numeroDestino}?text=${encodeURIComponent(mensagem)}`;

      let successBox = document.querySelector(".success-message");

      if (!successBox) {
        successBox = document.createElement("div");
        successBox.className = "success-message";
        reservaForm.appendChild(successBox);
      }

      successBox.innerHTML = `
        Redirecionando para o WhatsApp...<br><br>
        <strong>Aguarde a confirmação da JOFEL PLAY.</strong>
      `;

      window.open(url, "_blank");

      setTimeout(() => {
        reservaForm.reset();
      }, 500);
    });
  }
});

function formatPhone(value) {
  value = value.replace(/\D/g, "").slice(0, 11);

  if (value.length <= 10) {
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
    value = value.replace(/(\d{4})(\d)/, "$1-$2");
  } else {
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
    value = value.replace(/(\d{5})(\d)/, "$1-$2");
  }

  return value;
}

function formatCPF(value) {
  value = value.replace(/\D/g, "").slice(0, 11);
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  return value;
}

function formatCEP(value) {
  value = value.replace(/\D/g, "").slice(0, 8);
  value = value.replace(/(\d{5})(\d)/, "$1-$2");
  return value;
}

function formatDateBR(date) {
  if (!date) return "Não informado";
  const [ano, mes, dia] = date.split("-");
  return `${dia}/${mes}/${ano}`;
}

document.addEventListener("DOMContentLoaded", () => {
    // Font size controls
    const aumentarFonteBtn = document.getElementById("aumentar-fonte")
    const diminuirFonteBtn = document.getElementById("diminuir-fonte")
    const resetFonteBtn = document.getElementById("reset-fonte")
    const altoContrasteBtn = document.getElementById("alto-contraste")
    const skipLink = document.getElementById("skip-to-content")
  
    let tamanhoAtualFonte = 1
    const tamanhoMinFonte = 0.8
    const tamanhoMaxFonte = 1.5
    const incremento = 0.1
  
    // Increase font size
    aumentarFonteBtn.addEventListener("click", () => {
      if (tamanhoAtualFonte < tamanhoMaxFonte) {
        tamanhoAtualFonte += incremento
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
        anunciarMudancaFonte()
      }
    })
  
    // Decrease font size
    diminuirFonteBtn.addEventListener("click", () => {
      if (tamanhoAtualFonte > tamanhoMinFonte) {
        tamanhoAtualFonte -= incremento
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
        anunciarMudancaFonte()
      }
    })
  
    // Reset font size
    resetFonteBtn.addEventListener("click", () => {
      tamanhoAtualFonte = 1
      document.body.style.fontSize = "1rem"
      anunciarMudancaFonte("padrão")
    })
  
    // High contrast mode toggle
    altoContrasteBtn.addEventListener("click", () => {
      document.body.classList.toggle("alto-contraste")
  
      const isAltoContraste = document.body.classList.contains("alto-contraste")
      altoContrasteBtn.setAttribute("aria-pressed", isAltoContraste.toString())
  
      const mensagem = isAltoContraste ? "Modo de alto contraste ativado" : "Modo de alto contraste desativado"
  
      anunciarMensagem(mensagem)
    })
  
    // Skip to content functionality
    skipLink.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href").substring(1)
      const targetElement = document.getElementById(targetId)
  
      if (targetElement) {
        targetElement.setAttribute("tabindex", "-1")
        targetElement.focus()
      }
    })
  
    // Announce font size changes to screen readers
    function anunciarMudancaFonte(tamanho = "atual") {
      const mensagem =
        tamanho === "padrão"
          ? "Tamanho da fonte redefinido para o padrão"
          : `Tamanho da fonte alterado para ${Math.round(tamanhoAtualFonte * 100)}%`
  
      anunciarMensagem(mensagem)
    }
  
    // Screen reader announcer
    function anunciarMensagem(mensagem) {
      const anunciador = document.getElementById("screen-reader-announcer")
      anunciador.textContent = mensagem
    }
  
    // Add animation to gallery images
    const galeriaImagens = document.querySelectorAll("#galeria img")
  
    galeriaImagens.forEach((img) => {
      img.addEventListener("mouseenter", function () {
        this.classList.add("img-hover")
      })
  
      img.addEventListener("mouseleave", function () {
        this.classList.remove("img-hover")
      })
    })
  })
  
  
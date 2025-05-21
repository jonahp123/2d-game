import { dialogueData } from "./constants";

export function displayDialogue(dialogueData, onDisplayEnd) {
  const dialogueUI = document.getElementById("textbox-container");
  const dialogue = document.getElementById("dialogue");
  const redirectBtn = document.getElementById("redirect-btn");
  const redirectContainer = document.getElementById("redirect-container");
  const redirectNoBtn = document.getElementById("redirect-no-btn");

  dialogueUI.style.display = "block";
  
  // Handle both string and object dialogue formats
  const text = typeof dialogueData === "string" ? dialogueData : dialogueData.text;
  const withRedirect = typeof dialogueData === "object" && dialogueData.withRedirect;
  
  let index = 0;
  let currentText = "";
  const intervalRef = setInterval(() => {
    if (index < text.length) {
      currentText += text[index];
      dialogue.innerHTML = currentText;
      index++;
      return;
    }

    clearInterval(intervalRef);
    
    // Show redirect question if needed
    if (withRedirect) {
      redirectContainer.style.display = "block";
      document.getElementById("redirect-question").textContent = dialogueData.redirectText;
    }
  }, 1);

  const closeBtn = document.getElementById("close");

  function onCloseBtnClick() {
    onDisplayEnd();
    dialogueUI.style.display = "none";
    dialogue.innerHTML = "";
    clearInterval(intervalRef);
    closeBtn.removeEventListener("click", onCloseBtnClick);
    
    // Hide redirect elements
    if (redirectContainer) {
      redirectContainer.style.display = "none";
    }
  }

  closeBtn.addEventListener("click", onCloseBtnClick);
  
  // Set up redirect button if needed
  if (withRedirect && redirectBtn) {
    redirectBtn.onclick = () => {
      // Create transition overlay
      const overlay = document.createElement("div");
      overlay.id = "transition-overlay";
      document.body.appendChild(overlay);
      
      // Trigger transition and redirect
      setTimeout(() => {
        window.location.href = dialogueData.redirectURL;
      }, 1000);
    };
    
    // Add "No" button functionality
    if (redirectNoBtn) {
      redirectNoBtn.onclick = () => {
        onCloseBtnClick();
      };
    }
  }

  addEventListener("keypress", (key) => {
    if (key.code === "Enter") {
      closeBtn.click();
    }
  });
}

export function setCamScale(k) {
  const resizeFactor = k.width() / k.height();
  if (resizeFactor < 1) {
    k.camScale(k.vec2(1));
  } else {
    k.camScale(k.vec2(1.5));
  }
}

// Add the missing triggerPCInteraction function
export function triggerPCInteraction(player, pcObject) {
  if (player && pcObject) {
    // Set the player in dialogue mode
    player.isInDialogue = true;
    
    // Get the PC dialogue data
    const pcDialogueData = dialogueData.pc;
    
    // Display the dialogue
    displayDialogue(pcDialogueData, () => {
      player.isInDialogue = false;
    });
  }
}

// Utility function to check if a player object is properly initialized
export function isPlayerInitialized(player) {
  return player && player.pos && typeof player.move === 'function';
}

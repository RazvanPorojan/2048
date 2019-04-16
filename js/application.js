// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  game_manager = new GameManager(5, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});

function handle_undo() {
  game_manager.move(-1);
}

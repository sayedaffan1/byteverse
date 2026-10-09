// Web Audio API Synthesizer for Retro/Modern Arcade FX
class SoundEngine {
  constructor() {
    this.ctx = null;
    this.muted = false;
  }

  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  setMuted(isMuted) {
    this.muted = isMuted;
  }

  playTone(freq, type = 'sine', duration = 0.15, gainVal = 0.15, delay = 0) {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + delay);

      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime + delay);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + delay + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(this.ctx.currentTime + delay);
      osc.stop(this.ctx.currentTime + delay + duration);
    } catch {
      // Audio autoplay policy catch
    }
  }

  playClick() {
    this.playTone(800, 'triangle', 0.04, 0.08);
  }

  playCorrect() {
    // Two-tone bright chime
    this.playTone(523.25, 'sine', 0.12, 0.15, 0); // C5
    this.playTone(659.25, 'sine', 0.12, 0.15, 0.08); // E5
    this.playTone(783.99, 'sine', 0.22, 0.18, 0.16); // G5
  }

  playError() {
    // Low double buzz
    this.playTone(180, 'sawtooth', 0.12, 0.12, 0);
    this.playTone(130, 'sawtooth', 0.22, 0.15, 0.1);
  }

  playStreak() {
    // Fast ascending sweep
    [400, 550, 700, 880, 1100].forEach((f, i) => {
      this.playTone(f, 'triangle', 0.08, 0.1, i * 0.04);
    });
  }

  playLevelUp() {
    // Heroic fanfare
    const notes = [
      { f: 523.25, d: 0.12, t: 0 },    // C5
      { f: 659.25, d: 0.12, t: 0.1 },  // E5
      { f: 783.99, d: 0.12, t: 0.2 },  // G5
      { f: 1046.5, d: 0.35, t: 0.3 },  // C6
    ];
    notes.forEach(n => this.playTone(n.f, 'square', n.d, 0.12, n.t));
  }

  playCardFlip() {
    this.playTone(450, 'sine', 0.05, 0.06);
  }
}

export const sound = new SoundEngine();

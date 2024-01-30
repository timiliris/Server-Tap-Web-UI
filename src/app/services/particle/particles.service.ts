import { Injectable } from '@angular/core';
import { ClickMode, Container, Engine, HoverMode, MoveDirection, OutMode } from "tsparticles-engine";
// @ts-ignore
import { loadSlim } from "tsparticles-slim";

@Injectable({
  providedIn: 'root'
})
export class ParticlesService {

  /* Starting from 1.19.0 you can use a remote url (AJAX request) to a JSON with the configuration */
  particlesUrl = "http://foo.bar/particles.json";

  /* or the classic JavaScript object */
  particlesOptions = {
    background: {},
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: ClickMode.push,
        },
        onHover: {
          enable: true,
          mode: HoverMode.repulse,
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 2,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "random", // Utilisation de couleurs aléatoires pour chaque particule
      },
      links: {
        color: "random", // Utilisation de couleurs aléatoires pour chaque lien
        distance: 200,
        enable: true,
        opacity: 0.2,
        width: 2,
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.bounce,
        },
        random: true,
        speed: 1,
        straight: true,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 0.1, max: 2 },
      },
    },
    detectRetina: true,
  };
  Engine?: Engine;
  particlesLoaded(container: Container): void {
  }

  async particlesInit(engine: Engine): Promise<void> {
    this.Engine = engine
    await loadSlim(engine);
  }

  constructor() { }
}

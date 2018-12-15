import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  /****************************
  ** CRYPTO PART BEGINS HERE **
  ****************************/
  private map = {
    a: 'q', b: 'w', c: 'e',
    d: 'r', e: 't', f: 'y',
    g: 'u', h: 'i', i: 'o',
    j: 'p', k: 'a', l: 's',
    m: 'd', n: 'f', o: 'g',
    p: 'h', q: 'j', r: 'k',
    s: 'l', t: 'z', u: 'x',
    v: 'c', w: 'v', x: 'b',
    y: 'n', z: 'm'
  };

  private revMap = {
    a: 'k', b: 'x', c: 'v',
    d: 'm', e: 'c', f: 'n',
    g: 'o', h: 'p', i: 'h',
    j: 'q', k: 'r', l: 's',
    m: 'z', n: 'y', o: 'i',
    p: 'j', q: 'a', r: 'd',
    s: 'l', t: 'e', u: 'g',
    v: 'w', w: 'b', x: 'u',
    y: 'f', z: 't'
  };

  private encryptstring = (text: string): string => {
    return text.split('').map((char: string) => {
      return this.map[char.toLocaleLowerCase()];
    }).join('');
  }

  private decryptstring = (text: string): string => {
    return text.split('').map((char: string) => {
      return this.revMap[char.toLocaleLowerCase()];
    }).join('');
  }
  /**************************
  ** CRYPTO PART ENDS HERE **
  **************************/


  /**************************
  ** DATA BASE BEGINS HERE **
  **************************/
  private data = [
    [
      {
        "prevId": "",
        "id": "one",
        "sequence": 0,
        "hint": "",
        "media": {}
      },
      {
        "prevId": "one",
        "id": "twentyone",
        "sequence": 1,
        "hint": "jaya janardhana krishan radhika pate",
        "media": {}
      },
      {
        "prevId": "twentyone",
        "id": "twentytwo",
        "sequence": 2,
        "hint": "Jana vimochana Krishna Janma Mochana",
        "media": {}
      },
      {
        "prevId": "twentytwo",
        "id": "twentythree",
        "sequence": 3,
        "hint": "Jana vimochana Krishna Janma Mochana",
        "media": {
          "src" : "https://cdn.pixabay.com/photo/2016/10/27/22/53/heart-1776746_960_720.jpg",
          "type": 0
        }
      },
      {
        "prevId": "twentythree",
        "id": "twentyfour",
        "sequence": 4,
        "hint": "Jana vimochana Krishna Janma Mochana",
        "media": {}
      }
    ],
    [
      {
        "prevId": "",
        "id": "two",
        "sequence": 0,
        "hint": "",
        "media": {}
      },
      {
        "prevId": "two",
        "id": "thirtyone",
        "sequence": 1,
        "hint": "jaya janardhana krishan radhika pate",
        "media": {}
      },
      {
        "prevId": "thirtyone",
        "id": "thirtytwo",
        "sequence": 2,
        "hint": "Jana vimochana Krishna Janma Mochana",
        "media": {}
      },
      {
        "prevId": "thirtytwo",
        "id": "thirtythree",
        "sequence": 3,
        "hint": "Jana vimochana Krishna Janma Mochana",
        "media": {}
      },
      {
        "prevId": "thirtythree",
        "id": "thirtyfour",
        "sequence": 4,
        "hint": "Jana vimochana Krishna Janma Mochana",
        "media": {}
      }
    ],
    [
      {
        "prevId": "",
        "id": "three",
        "sequence": 0,
        "hint": "",
        "media": {}
      },
      {
        "prevId": "three",
        "id": "fourtyone",
        "sequence": 1,
        "hint": "jaya janardhana krishan radhika pate",
        "media": {}
      },
      {
        "prevId": "fourtyone",
        "id": "fourtytwo",
        "sequence": 2,
        "hint": "Jana vimochana Krishna Janma Mochana",
        "media": {
          "src" : "http://techslides.com/demos/sample-videos/small.mp4",
          "type": 1
        }
      },
      {
        "prevId": "fourtytwo",
        "id": "fourtythree",
        "sequence": 3,
        "hint": "Jana vimochana Krishna Janma Mochana",
        "media": {}
      },
      {
        "prevId": "fourtythree",
        "id": "fourtyfour",
        "sequence": 4,
        "hint": "Jana vimochana Krishna Janma Mochana",
        "media": {}
      }
    ],
    [
      {
        "prevId": "",
        "id": "four",
        "sequence": 0,
        "hint": "",
        "media": {}
      },
      {
        "prevId": "four",
        "id": "fiftyone",
        "sequence": 1,
        "hint": "jaya janardhana krishan radhika pate",
        "media": {}
      },
      {
        "prevId": "fiftyone",
        "id": "fiftytwo",
        "sequence": 2,
        "hint": "Jana vimochana Krishna Janma Mochana",
        "media": {}
      },
      {
        "prevId": "fiftytwo",
        "id": "fiftythree",
        "sequence": 3,
        "hint": "Jana vimochana Krishna Janma Mochana",
        "media": {}
      },
      {
        "prevId": "fiftythree",
        "id": "fiftyfour",
        "sequence": 4,
        "hint": "Jana vimochana Krishna Janma Mochana",
        "media": {}
      }
    ]
  ];
  /************************
  ** DATA BASE ENDS HERE **
  ************************/

  public isValidCode(code: string): boolean {
    if (!code) {
      return false;
    }
    const value: string = this.decryptstring(code);
    let isValid: boolean = false;
    for (let i = 0, il = this.data.length; i < il; i++) {
      const subArray = this.data[i];
      for (let j = 0, jl = subArray.length; j < jl; j++) {
        const d = subArray[j];
        if (d.id === value) {
          isValid = true;
          i = il;
          j = jl;
          break;
        }
      }
    }
    return isValid;
  }

  private onCurrstageCodeFeed(currentStageCode: string) {
    const valid: boolean = this.isValidCode(currentStageCode);
    if (!valid) {
      alert('Invald current stage code');
    }
    return valid;
  }

  private onPrevstageCodeFeed(previousStageCode: string) {
    const valid: boolean = this.isValidCode(previousStageCode);
    if (!valid) {
      alert('Invald previous stage code');
    }
    return valid;
  }

  private checkStageSync(currentStageCode: string, previousStageCode: string): boolean {
    const currStage = this.getStageByCode(currentStageCode);
    const prevStage = this.getStageByCode(previousStageCode);
    if (currStage.prevId === prevStage.id) {
      return true;
    }
    else {
      alert('previous stage key does not match with current stage');
      return false;
    }

  }

  public validateStageCodes(currentStageCode: string, previousStageCode: string) {
    const validCurrent: boolean = this.onCurrstageCodeFeed(currentStageCode);
    const validPrev: boolean = this.onPrevstageCodeFeed(previousStageCode);
    if (validCurrent && validPrev) {
      if (this.checkStageSync(currentStageCode, previousStageCode)) {
        return true;
      } else {
        return false;
      }
    }
  }

  public getStageByCode(stageCode: string): any {
    let stage = {};
    const value: string = this.decryptstring(stageCode);
    for (let i = 0, il = this.data.length; i < il; i++) {
      const subArray = this.data[i];
      for (let j = 0, jl = subArray.length; j < jl; j++) {
        const d = subArray[j];
        if (d.id === value) {
          stage = d;
          stage['team'] = i + 1;
          stage['stageLength'] = this.data[i].length;
          i = il;
          j = jl;
          break;
        }
      }
    }
    return stage;
  }
}

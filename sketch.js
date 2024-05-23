let t =[]
// parameter model
let alpha;
let beta;
let I0;
let N;
let delT;
let maxTime;

let grafik
function setup() {
  createCanvas(600, 600);
  I0 = createInput("");
  I0.position(40,420);
  N = createInput("");
  N.position(40,450);
  delT = createInput("");
  delT.position(55,480);
  maxTime = createInput("");
  maxTime.position(80,510);
  
  alpha = createSlider(0.1, 1,0.4, 0.01);
  alpha.position(58,365);
  alpha.size(80)
  beta = createSlider(0, 0.25,0.1,0.01);
  beta.position(50,391);
  beta.size(80)
  
  let k = createP('alpha')
  k.style('font-size', '16px');
  k.position(20, 348);
  let m = createP('beta')
  m.style('font-size', '16px');
  m.position(20, 375);
  
  let p = createP('I0');
  p.style('font-size', '16px');
  p.position(20, 406.5);  
  let q = createP('N');
  q.style('font-size', '14px');
  q.position(20, 440);
  let h = createP('delT')
  h.style('font-size', '14px');
  h.position(20, 470);
  let n = createP('maxTime')
  n.style('font-size', '14px');
  n.position(20, 499);
}
function solve(){
      if (delT == 0) return;

    let I_ar = [];
    let S_ar = [];
    let R_ar = [];
    let t_ar = [];

    let I = I0;
    let S = N;
    let R = 0;

    let counter = 0;
    for (let t = 0; t <= maxTime; t += delT) {
        let delS = -beta * S * I / N * delT;
        let delI = beta * S * I / N * delT - alpha * I * delT;
        let delR = alpha * I * delT;
        S += delS;
        I += delI;
        R += delR;
        if (counter % skipEvery == 0) {
            I_ar.push(I);
            S_ar.push(S);
            R_ar.push(R);
            t_ar.push(Number(t.toFixed(2)));
        }
        counter++;
    }
}
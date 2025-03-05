/* ------------------------------ TASK 3 -----------------------------------
Perpanaudokite aprašytą type'ą, kad sukurti naujus tipus, kuriuos priskyrus kintamiesiems, visas kodas veiktų teisingai.
Kur komentare parašyta "error", ta eilutė po tipo priskyrimo kintamąjam turėtų mesti klaidą. Pasitikrinus užkomentuoti visą eilutę, kad leistų sukompiliuoti.

Pastaba: Aprašyto tipo NEKEISTI
-------------------------------------------------------------------------- */

type TipasNaudoti = {
  marke: string;
  modelis: string;
  metai: number;
  spalva: string;
  kilometrazas: number;
};


type Dviratis = Pick<TipasNaudoti, 'metai' | 'spalva'>;

const dviratis: Dviratis = {
  metai: 1999,
  spalva: ''
};


type NaujaMasina = Omit<TipasNaudoti, 'kilometrazas'>;

const naujaMasina: NaujaMasina = {
  marke: '',
  modelis: '',
  metai: 2025,
  spalva: ''
};


type SenaMasina = TipasNaudoti & {
  surudyjesDugnas: boolean;
};

const senaMasina: SenaMasina = {
  marke: '',
  modelis: '',
  metai: 2025,
  spalva: '',
  kilometrazas: 999999,
  surudyjesDugnas: true
};

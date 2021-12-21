import { icidadeModel } from "./icidadeModel";
import { itelefoneModel } from "./itelefoneModel";

export class iapplicantRegModel{
    nmDemandante: string;
    email: string;
    sexo: string;
    cpf: string;
    cdTipoDemandante: 2;
    usuario: "5";
    cdAtendimento: 463655;
    cidadeDTO: cidadeClassModel;
    telefones: telefoneClassModel;
    
}

export class telefoneClassModel{
    ddd: string;
    telefone: string;
    tipoTelefoneDemandante: 5;
}

export class cidadeClassModel{
    cdCidade: string;
}

//Dados da api json-server fake

// "nmDemandante": "Curujito",
// "email": "curu@jito.com.br",
// "sexo": "M",
// "cpf": "98765430001",
// "cdTipoDemandante": 2,
// "usuario": "5",
// "cdAtendimento": 463655,
// "cidadeDTO": {
    // "cdCidade": "27"
// },
// "telefones": [
    // {
    // "ddd": "61",
    // "telefone": "99990000",
    // "tipoTelefoneDemandante": 5
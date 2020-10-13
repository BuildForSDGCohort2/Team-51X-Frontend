export class Patient {
    id: string;
    civilite: string;
    nom: string;
    prenom: string;
    sexe: string;
    dateNaissance: Date;
    lieuNaissance: string;
    securiteSocial: string;
    situationFamiliale: string;
    profession: string;
    groupeSanguin: string;
    rfid: string;
    adresse: string;
    username: string;
    password: string;
    telMobile: string;
    telDomicile: string;
    telPro: string;
    email: string;
    mutuelleId: string;
    status: number;
    avatar?: string;
    createdBy?: string;
    jwtToken?: string;
}

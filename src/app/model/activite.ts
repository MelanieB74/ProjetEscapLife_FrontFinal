export class Activite {
    id: number;
    tarifNormal: number;
    tarifJeune: number;
    tarifEtudiant: number;
    nbMax: number;
    nbMin: number;

    constructor(id: number, tfNorm: number, tfJeun: number, tfEtud: number, nbMAx: number, nbMin: number) {
        this.id = id;
        this.tarifNormal = tfNorm;
        this.tarifJeune = tfJeun;
        this.tarifEtudiant = tfEtud;
        this.nbMax = nbMAx;
        this.nbMin = nbMin;
    }

}

export class ActEscapeGame extends Activite {
    mission: string;

    constructor(id: number, mission: string, tfNorm: number, tfJeun: number, tfEtud: number, nbMAx: number, nbMin: number) {
        super(id, tfNorm, tfJeun, tfEtud, nbMAx, nbMin);
        this.mission = mission;
    }

    public static createBlank(): ActEscapeGame {
        return new ActEscapeGame(-1, '', 1, 1, 1, 1, 1);
    }

    public static activiteFromJSON(obj: any): ActEscapeGame {
        return new ActEscapeGame(obj.id, obj.mission, obj.tarifNormal, obj.tarifJeune, obj.tarifEtudiant, obj.nbMax, obj.nbMin);
    }

}

export class ActLaserGame extends Activite {
    theme: string;

    constructor(id: number, theme: string, tfNorm: number, tfJeun: number, tfEtud: number, nbMAx: number, nbMin: number) {
        super(id, tfNorm, tfJeun, tfEtud, nbMAx, nbMin);
        this.theme = theme;
    }

    public static createBlank(): ActLaserGame {
        return new ActLaserGame(-1, '', 1, 1, 1, 1, 1);
    }

    public static activiteFromJSON(obj: any): ActLaserGame {
        return new ActLaserGame(obj.id, obj.theme, obj.tarifNormal, obj.tarifJeune, obj.tarifEtudiant, obj.nbMax, obj.nbMin);
    }

}

export class ActBowling extends Activite {
    piste: number;

    constructor(id: number, piste: number, tfNorm: number, tfJeun: number, tfEtud: number, nbMAx: number, nbMin: number) {
        super(id, tfNorm, tfJeun, tfEtud, nbMAx, nbMin);
        this.piste = piste;
    }

    public static createBlank(): ActBowling {
        return new ActBowling(-1, 1, 1, 1, 1, 1, 1);
    }

    public static activiteFromJSON(obj: any): ActBowling {
        return new ActBowling(obj.id, obj.piste, obj.tarifNormal, obj.tarifJeune, obj.tarifEtudiant, obj.nbMax, obj.nbMin);
    }

}

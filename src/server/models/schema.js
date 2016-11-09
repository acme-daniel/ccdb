var mongoose = require('mongoose');

var score = {
    allValuesNotAvailable: Boolean,
    airway: String,
    albumin: Number,
    baseExcess: Number,
    bicarbonate: Number,
    bilirubin: Number,
    corrCalcium: Number,
    creatinine: Number,
    currentAntibioticTherapyInWard: String,
    diastolicPressure: Number,
    durationOfAntibiotics: Number,
    eyeOpening: String,
    fiO2: Number,
    glasgowComaScale: String,
    glucose: Number,
    haematocrit: Number,
    hCO3: Number,
    heartRate: Number,
    iNR: Number,
    lactate: Number,
    motorResponse: String,
    pCO2: Number,
    pH: Number,
    pO2: Number,
    potassium: Number,
    pupils: String,
    respiratoryRate: Number,
    saturation: Number,
    sedated: Boolean,
    sodium: Number,
    systolicPressure: Number,
    temperature: Number,
    thrombolyticTherapy: String,
    urea: Number,
    urineOutput: Number,
    urineOutputHours: Number,
    ventilated: String,
    verbalResponse: String,
    wBC: Number
};

var admission = {
    entryDateTime: Date,
    admissionDateTime: Date,
    admissionSummaryNotes:String,
    admittedFrom: String,
    admittingConsultant: String,
    admittingDoctor: String,
    airwayAndBreathing: String,
    anaesthesia: String,
    analgesiaAndSedation: String,
    antibiotics: String,
    bloodLoss: String,
    circulation: String,
    colloidVolume: String,
    cruoprecipitate: String,
    crystalloidVolume: String,
    durationOfAnaesthesia: String,
    durationOfOperation: String,
    fluids: String,
    freezeDriedPlasma: String,
    gradeOfLaryngoscopy: String,
    intraOperativeTotalVolumes: String,
    lines: String,
    medications: String,
    numOfdaysInhospitalBeforeICU: String,
    operationPerformed: String,
    operativeFindings: String,
    operativePlan: String,
    other: String,
    packedCells: String,
    pastMedicalHistory: String,
    pastSurgicalHistory: String,
    platelets: String,
    renalAndElectrolytes: String,
    surgeryDateTime: Date,
    thrombosisManagement: String,
    ulcerProphylaxis: String,
    urineOutput: String
};

var referral = {
    entryDateTime: Date,
    baseDisciplineConsultant: String,
    baseDisciplineReferring: String,
    comorbidities: [String],
    dateOperationPlanned: Date,
    decision: String,
    decisionReason: String,
    delayReason: String,
    diagnosis: [String],
    diagnosisDetails: String,
    diagnosisType: String,
    disciplineOfReferringDoctor: String,
    doctorFinalising: String,
    emergencyVsElective: String,
    examination: String,
    finalOutcome: String,
    history: String,
    icuConsultant: String,
    icuRegistrar: String,
    ifAcceptedAnyDelay: String,
    levelOfCareRequired: String,
    managementPlan: String,
    numberOfDaysInHospital: Number,
    operativeStatusAtTimeOfReferral: String,
    outcomeEntryDateTime: Date,
    patientCurrentlyVentilated: String,
    patientLocation: String,
    plannedOperation: String,
    reasonForOperation: String,
    reasonOfReferralToICU: [String],
    reasonPatientWasNeverAdmitted: String,
    referralDateTime: Date,
    referralForComplicationOf: String,
    referringDoctor: String,
    referringHospital: String,
    revisedScccm: String,
    sccmScore: String,
    timePatientSeenByICU: Date,
    unitTransferredToIfTransferred: String,
    wasThisPatientInIcuInThePrevious48Hours: String
};

var discharge = {
    entryDateTime: Date,
    comments: String,
    dischargeDateTime: Date,
    status: String
};

exports.patientSchema = mongoose.Schema({
    reference: String,
    hospital: String,
    firstName: String,
    lastName: String,
    birthDate: Date,
    gender: String,
    race: String,
    referral: referral,
    admission: admission,
    discharge: discharge,
    referralScore: score,
    admissionScore: score,
    apacheLow: score,
    apacheHigh: score
});

exports.userSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    hospital: { type: String, required: true }, // add this to every query (patient.hospital equals this hospital)
    role: String, // to be used with the admin authorisation
    passwordChange: String
});

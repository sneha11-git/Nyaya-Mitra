export interface IPCSection {
  number: string;
  title: string;
  description: string;
  simplifiedExplanation: string;
  bailable: boolean;
  steps: string[];
  punishment?: string;
}

export const ipcSections: IPCSection[] = [
  {
    number: "302",
    title: "Murder",
    description:
      "Whoever commits murder shall be punished with death or imprisonment for life, and shall also be liable to fine.",
    simplifiedExplanation:
      "This section deals with intentionally taking someone's life. If a person kills another person with the intention to do so, or knowing that their actions would likely cause death, it is considered murder. This is one of the most serious crimes in Indian law.",
    bailable: false,
    punishment: "Death penalty or Life imprisonment + Fine",
    steps: [
      "Stay calm and do not flee the scene unnecessarily — it can imply guilt",
      "Exercise your right to remain silent — do not make any statements without a lawyer",
      "Contact a criminal defence lawyer immediately",
      "Do not destroy or tamper with any evidence",
      "You have the right to be informed of the charges against you",
      "Apply for bail through your lawyer at the Sessions Court",
    ],
  },
  {
    number: "376",
    title: "Rape",
    description:
      "Punishment for rape — sexual intercourse by a man with a woman against her will or without her consent.",
    simplifiedExplanation:
      "This section defines and punishes the crime of rape. It covers all forms of non-consensual sexual acts. The law provides strong protections for victims and harsh punishment for the accused.",
    bailable: false,
    punishment: "Rigorous imprisonment of 7 years to Life",
    steps: [
      "Exercise your right to remain silent — do not make any statements without a lawyer",
      "Contact a criminal defence lawyer immediately",
      "Do not destroy or tamper with any evidence",
      "You are entitled to a copy of the FIR",
      "Apply for bail through your lawyer — bail is discretionary in Sessions Court",
      "Cooperate only through your legal counsel",
    ],
  },
  {
    number: "420",
    title: "Cheating and Dishonestly Inducing Delivery of Property",
    description:
      "Whoever cheats and thereby dishonestly induces the person deceived to deliver any property to any person, shall be punished.",
    simplifiedExplanation:
      "This section punishes fraud and cheating. If someone deceives another person to hand over money, property, or sign documents under false pretences, it is cheating under this section. Common examples include investment fraud, fake job offers, and scam transactions.",
    bailable: true,
    punishment: "Imprisonment up to 7 years + Fine",
    steps: [
      "Gather all documentary evidence: receipts, messages, emails, contracts",
      "Consult a criminal lawyer immediately to understand your position",
      "You may be eligible for bail — apply promptly through your lawyer",
      "File a counter-complaint if you were also defrauded",
      "Maintain all communication records related to the case",
      "Cooperate with the investigation through your legal counsel",
    ],
  },
  {
    number: "498A",
    title: "Cruelty by Husband or Relatives",
    description:
      "Whoever, being the husband or the relative of the husband of a woman, subjects such woman to cruelty shall be punished.",
    simplifiedExplanation:
      "This section protects married women from cruelty or harassment by their husbands or in-laws. 'Cruelty' includes physical or mental abuse, as well as harassment for dowry. It is a non-bailable offence, meaning the accused cannot demand bail as a right.",
    bailable: false,
    punishment: "Imprisonment up to 3 years + Fine",
    steps: [
      "Contact a lawyer specializing in family law immediately",
      "Do not make any statements to police without legal counsel",
      "Gather evidence: medical records, photographs of injuries, witnesses",
      "Contact women's helpline 1091 for support",
      "Apply for anticipatory bail through your lawyer before arrest if possible",
      "Understand that this offence is non-bailable but bail can be granted by court",
    ],
  },
  {
    number: "304B",
    title: "Dowry Death",
    description:
      "Where the death of a woman is caused by any burns or bodily injury or occurs under abnormal circumstances within seven years of marriage.",
    simplifiedExplanation:
      "This section deals with the death of a married woman that occurs within 7 years of marriage under suspicious or abnormal circumstances related to dowry demands. It is presumed to be a dowry death if the woman was subjected to cruelty related to dowry demands before her death.",
    bailable: false,
    punishment: "Imprisonment of 7 years to Life",
    steps: [
      "Contact a criminal defence lawyer as a matter of urgency",
      "Do not make any statements to police without legal counsel present",
      "Apply for anticipatory bail immediately if not yet arrested",
      "Preserve all evidence that may prove innocence",
      "The accused must rebut the presumption of guilt — work closely with your lawyer",
      "Family members may also be implicated — all should seek legal advice",
    ],
  },
  {
    number: "307",
    title: "Attempt to Murder",
    description:
      "Whoever does any act with such intention or knowledge and under such circumstances that, if by that act he caused death, he would be guilty of murder.",
    simplifiedExplanation:
      "When someone tries to kill another person but fails, they can be charged under this section. The key element is the intention to cause death. Even if the victim survives, the accused can face severe punishment.",
    bailable: false,
    punishment:
      "Imprisonment up to 10 years or Life (if hurt is caused) + Fine",
    steps: [
      "Contact a criminal lawyer immediately",
      "Do not flee — it can be used as evidence of guilt",
      "Exercise your right to silence until your lawyer is present",
      "Do not tamper with any evidence at the scene",
      "Seek bail through proper legal channels",
      "Your lawyer can argue lack of intention which is crucial in this offence",
    ],
  },
  {
    number: "323",
    title: "Voluntarily Causing Hurt",
    description:
      "Whoever, except in the case provided for by section 334, voluntarily causes hurt, shall be punished with imprisonment of either description for a term which may extend to one year, or with fine.",
    simplifiedExplanation:
      "This section covers cases where someone intentionally hurts another person causing pain, disease, or bodily harm. It is a relatively minor offence and is bailable. Common examples include assault, slapping, or causing minor physical injuries.",
    bailable: true,
    punishment: "Imprisonment up to 1 year or Fine up to ₹1,000 or both",
    steps: [
      "Get a medical examination done and preserve the medical certificate",
      "File a complaint at the nearest police station with full details",
      "Gather witnesses who saw the incident",
      "Since it is bailable, you can secure bail at the police station itself",
      "Consult a lawyer to understand defences available to you",
      "Mediation or settlement may be possible in minor cases",
    ],
  },
  {
    number: "354",
    title:
      "Assault or Criminal Force to Woman with Intent to Outrage Her Modesty",
    description:
      "Whoever assaults or uses criminal force to any woman, intending to outrage or knowing it to be likely that he will thereby outrage her modesty.",
    simplifiedExplanation:
      "This section punishes any physical assault or unwanted touch on a woman that is meant to violate her dignity or modesty. This includes eve-teasing, groping, and similar acts. The offence is non-bailable.",
    bailable: false,
    punishment: "Imprisonment of 1 to 5 years + Fine",
    steps: [
      "Contact a criminal lawyer immediately",
      "The accused should not approach the complainant or their family",
      "Apply for bail through the Magistrate's court with your lawyer",
      "Maintain complete silence until legal counsel is available",
      "Gather evidence that disproves the allegation if applicable",
      "Be aware that this is a cognizable, non-bailable offence",
    ],
  },
  {
    number: "379",
    title: "Theft",
    description:
      "Whoever intending to take dishonestly any moveable property out of the possession of any person without that person's consent, moves that property in order to such taking, is said to commit theft.",
    simplifiedExplanation:
      "Theft involves taking someone's property without their permission and with dishonest intent. It is a bailable offence. Common examples include pickpocketing, shoplifting, and stealing from homes.",
    bailable: true,
    punishment: "Imprisonment up to 3 years or Fine or both",
    steps: [
      "Consult a criminal lawyer to understand the charges",
      "Since it is bailable, apply for bail promptly at the police station",
      "Do not make any admissions without your lawyer present",
      "Gather evidence that disproves your involvement",
      "If there is a misidentification, your lawyer can present an alibi",
      "Cooperate professionally with the investigation through your lawyer",
    ],
  },
  {
    number: "406",
    title: "Criminal Breach of Trust",
    description:
      "Whoever, being in any manner entrusted with property, or with any dominion over property, dishonestly misappropriates or converts to his own use that property.",
    simplifiedExplanation:
      "This section applies when someone who is entrusted with another's property (like an employee, trustee, or agent) misuses or steals that property. It is a serious offence as it involves breach of trust. Common in cases involving employees stealing from employers or financial fraud.",
    bailable: false,
    punishment: "Imprisonment up to 3 years or Fine or both",
    steps: [
      "Contact a lawyer specializing in criminal/financial law immediately",
      "Gather all proof of authorized use of the property",
      "Preserve all agreements, receipts, and communications",
      "Apply for bail through your lawyer — court discretion applies",
      "Do not make any admissions or statements without legal counsel",
      "An accounting of funds/property through your lawyer may help your case",
    ],
  },
  {
    number: "392",
    title: "Robbery",
    description:
      "Whoever commits theft, having at the time of committing the theft, or in order to the committing of the theft, or in carrying away or attempting to carry away property obtained by the theft, voluntarily causes or attempts to cause to any person death or hurt.",
    simplifiedExplanation:
      "Robbery is theft combined with violence or the threat of violence. It is a much more serious offence than simple theft. Using force or threatening harm to steal makes it robbery.",
    bailable: false,
    punishment: "Rigorous imprisonment up to 10 years + Fine",
    steps: [
      "Contact a criminal lawyer immediately",
      "Do not make any statements to police without your lawyer present",
      "Apply for bail through the Sessions Court via your lawyer",
      "The lawyer can challenge identification and evidence",
      "Any alibi evidence should be preserved immediately",
      "Cooperate with your lawyer to build a strong defence",
    ],
  },
  {
    number: "395",
    title: "Dacoity",
    description:
      "Whoever commits or attempts to commit dacoity shall be punished with imprisonment for life, or with rigorous imprisonment for a term not exceeding ten years, and shall also be liable to fine.",
    simplifiedExplanation:
      "Dacoity is robbery committed by a group of five or more people. It is one of the most serious property-related crimes. If five or more people together commit or plan a robbery, all of them are guilty of dacoity.",
    bailable: false,
    punishment:
      "Life imprisonment or Rigorous imprisonment up to 10 years + Fine",
    steps: [
      "Contact a senior criminal lawyer with experience in serious offences",
      "Maintain absolute silence with police until your lawyer arrives",
      "Do not implicate others — let your lawyer handle your specific role",
      "Apply for bail through the Sessions Court",
      "Establish your whereabouts at the time of the alleged offence",
      "Your lawyer can argue limited or no participation",
    ],
  },
  {
    number: "499",
    title: "Defamation",
    description:
      "Whoever, by words either spoken or intended to be read, or by signs or by visible representations, makes or publishes any imputation concerning any person intending to harm, or knowing or having reason to believe that such imputation will harm the reputation of such person.",
    simplifiedExplanation:
      "Defamation is saying or publishing false things about someone that harms their reputation. In India, defamation can be both a civil wrong and a criminal offence. Truth is a valid defence in most cases.",
    bailable: true,
    punishment: "Simple imprisonment up to 2 years or Fine or both",
    steps: [
      "Document all defamatory statements with dates and witnesses",
      "Consult a lawyer to evaluate if the statements are truly defamatory",
      "Truth and public interest are valid defences — gather supporting evidence",
      "Consider sending a legal notice demanding retraction before filing a case",
      "Since it is bailable, bail can be secured at the police station",
      "Both civil and criminal routes are available — your lawyer can advise",
    ],
  },
  {
    number: "504",
    title: "Intentional Insult with Intent to Provoke Breach of Peace",
    description:
      "Whoever intentionally insults, and thereby gives provocation to any person, intending or knowing it to be likely that such provocation will cause him to break the public peace, or to commit any other offence.",
    simplifiedExplanation:
      "This section applies when someone deliberately insults another person in a way that is likely to provoke them into committing violence or disturbing the peace. The key is the deliberate intent to provoke. A casual insult without this intent may not qualify.",
    bailable: true,
    punishment: "Imprisonment up to 2 years or Fine or both",
    steps: [
      "Document the incident with date, time, location, and witnesses",
      "The accused should avoid further contact with the complainant",
      "Since it is bailable, apply for bail at the police station",
      "Context and intent matter greatly — consult a lawyer",
      "Mediation and apology may resolve the matter without full prosecution",
      "Gather character witnesses if needed",
    ],
  },
  {
    number: "506",
    title: "Criminal Intimidation",
    description:
      "Whoever threatens another with any injury to his person, reputation or property, or to the person or reputation of any one in whom that person is interested, with intent to cause alarm to that person, or to cause that person to do any act which he is not legally bound to do.",
    simplifiedExplanation:
      "Criminal intimidation involves threatening someone with harm to make them afraid or to force them to do something against their will. This includes death threats, property damage threats, or threats to one's reputation. The threat must be serious and intentional.",
    bailable: true,
    punishment:
      "Imprisonment up to 2 years or Fine or both (up to 7 years if threat involves death/grievous hurt)",
    steps: [
      "Document all threats: save screenshots, voice recordings, written messages",
      "Report to the nearest police station with all evidence",
      "Apply for police protection if the threat appears genuine",
      "Since it is bailable, secure bail at the police station",
      "A restraining order can be obtained through your lawyer if needed",
      "If threats escalate to stalking, additional sections may apply",
    ],
  },
  {
    number: "326",
    title: "Voluntarily Causing Grievous Hurt by Dangerous Weapons",
    description:
      "Whoever, except in the case provided for by section 335, voluntarily causes grievous hurt by means of any instrument for shooting, stabbing or cutting, or any instrument which, used as weapon of offence, is likely to cause death.",
    simplifiedExplanation:
      "This section applies when someone causes serious injuries (like broken bones, permanent damage, or disfigurement) using weapons like knives, guns, or other dangerous instruments. The injuries must be 'grievous' which means more serious than ordinary hurt.",
    bailable: false,
    punishment:
      "Imprisonment for life or rigorous imprisonment up to 10 years + Fine",
    steps: [
      "Contact a criminal lawyer immediately",
      "Do not make any statements without your lawyer present",
      "Apply for bail through Sessions Court — judge's discretion applies",
      "Medical evidence of the injury type will be crucial — challenge if needed",
      "Whether a weapon was used and its nature is key — preserve any counter-evidence",
      "Your lawyer may argue provocation or self-defence depending on circumstances",
    ],
  },
  {
    number: "363",
    title: "Kidnapping",
    description:
      "Whoever kidnaps any person from India or from lawful guardianship, shall be punished with imprisonment of either description for a term which may extend to seven years, and shall also be liable to fine.",
    simplifiedExplanation:
      "Kidnapping involves taking or enticing someone away without their consent or without permission of a guardian (for minors). There are two types: kidnapping from India (taking someone out of the country) and kidnapping from lawful guardianship (mainly for children).",
    bailable: false,
    punishment: "Imprisonment up to 7 years + Fine",
    steps: [
      "Contact a criminal lawyer immediately",
      "Do not approach the alleged victim or their family",
      "Establish your relationship with the person — especially in family dispute cases",
      "In family disputes (custody etc.), consult a family law specialist",
      "Apply for bail through Sessions Court via your lawyer",
      "Gather evidence of consent or lawful guardianship rights",
    ],
  },
  {
    number: "376A",
    title: "Rape Causing Death or Vegetative State",
    description:
      "Whoever commits an offence punishable under Section 376 and in the course of such offence inflicts an injury which causes the death of the woman or causes the woman to be in a persistent vegetative state.",
    simplifiedExplanation:
      "This section applies when rape results in the victim's death or leaves them in a permanent vegetative state. It carries one of the harshest punishments in Indian criminal law, including the possibility of the death penalty.",
    bailable: false,
    punishment:
      "Rigorous imprisonment minimum 20 years to Life or Death penalty",
    steps: [
      "Contact the most senior criminal defence lawyer available immediately",
      "Absolute right to silence must be exercised — no statements at all",
      "Bail is extremely difficult — your lawyer should file immediately",
      "Challenge all forensic and medical evidence through expert review",
      "Trial will be in a Special Fast Track Court",
      "This case will require comprehensive legal strategy from day one",
    ],
  },
  {
    number: "511",
    title: "Punishment for Attempting to Commit Offences",
    description:
      "Whoever attempts to commit an offence punishable by this Code with imprisonment for life or imprisonment, or to cause such an offence to be committed, and in such attempt does any act towards the commission of the offence.",
    simplifiedExplanation:
      "This section punishes attempts to commit crimes that did not ultimately succeed. If you try to commit a crime but fail for some reason, you can still be punished under this section. The punishment is generally half of what the completed offence would carry.",
    bailable: true,
    punishment: "Half the punishment prescribed for the attempted offence",
    steps: [
      "Consult a lawyer immediately to understand the specific charge",
      "The prosecution must prove actual steps towards the crime — gather counter-evidence",
      "Mere preparation without action is not enough for this offence",
      "Since the base offence matters, check if the attempt charge is bailable in your case",
      "Voluntary abandonment of the attempt may be a valid defence — discuss with lawyer",
      "Gather evidence showing no criminal intent",
    ],
  },
];

export function findSection(query: string): IPCSection | undefined {
  const normalized = query
    .trim()
    .toUpperCase()
    .replace(/^IPC\s*/i, "")
    .replace(/\s+/g, "");
  return ipcSections.find(
    (s) =>
      s.number.toUpperCase() === normalized ||
      s.title.toUpperCase().includes(query.trim().toUpperCase()),
  );
}

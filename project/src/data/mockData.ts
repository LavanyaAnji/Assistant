export interface Patient {
  id: string;
  name: string;
  age: number;
  condition: string;
  medications: string[];
}

export interface Appointment {
  id: string;
  patientName: string;
  type: string;
  date: string;
  time: string;
  notes: string;
}

export const medicationTemplates = [
  {
    condition: "Hypertension",
    medications: [
      "Lisinopril 10mg",
      "Amlodipine 5mg",
      "Hydrochlorothiazide 25mg",
      "Metoprolol 50mg"
    ]
  },
  {
    condition: "Diabetes Type 2",
    medications: [
      "Metformin 1000mg",
      "Glipizide 5mg",
      "Januvia 100mg",
      "Ozempic 1mg/0.75mL"
    ]
  },
  {
    condition: "Asthma",
    medications: [
      "Albuterol HFA 90mcg",
      "Fluticasone 250mcg",
      "Montelukast 10mg",
      "Budesonide 180mcg"
    ]
  },
  {
    condition: "Anxiety & Depression",
    medications: [
      "Sertraline 50mg",
      "Buspirone 10mg",
      "Escitalopram 10mg",
      "Alprazolam 0.5mg"
    ]
  }
];

export const mockPatients: Patient[] = [
  {
    id: "1",
    name: "John Smith",
    age: 45,
    condition: "Hypertension",
    medications: ["Lisinopril 10mg", "Amlodipine 5mg"]
  },
  {
    id: "2",
    name: "Sarah Johnson",
    age: 35,
    condition: "Asthma",
    medications: ["Albuterol HFA 90mcg", "Fluticasone 250mcg"]
  },
  {
    id: "3",
    name: "Michael Brown",
    age: 52,
    condition: "Diabetes Type 2",
    medications: ["Metformin 1000mg", "Glipizide 5mg"]
  },
  {
    id: "4",
    name: "Emily Davis",
    age: 29,
    condition: "Anxiety & Depression",
    medications: ["Sertraline 50mg", "Buspirone 10mg"]
  }
];

export const appointments: Appointment[] = [
  {
    id: "1",
    patientName: "John Smith",
    type: "Follow-up",
    date: "2025-03-15",
    time: "09:00 AM",
    notes: "Blood pressure monitoring and medication review"
  },
  {
    id: "2",
    patientName: "Sarah Johnson",
    type: "Regular Checkup",
    date: "2025-03-15",
    time: "10:30 AM",
    notes: "Annual asthma assessment and inhaler technique review"
  },
  {
    id: "3",
    patientName: "Michael Brown",
    type: "Urgent Care",
    date: "2025-03-15",
    time: "02:00 PM",
    notes: "Diabetes management and blood sugar control"
  },
  {
    id: "4",
    patientName: "Emily Davis",
    type: "Consultation",
    date: "2025-03-16",
    time: "11:15 AM",
    notes: "Mental health evaluation and medication adjustment"
  }
];
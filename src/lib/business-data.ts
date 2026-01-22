export interface Product {
  title: string;
  image: string;
  link?: string;
}

export interface BusinessCategory {
  title: string;
  slug: string;
  description?: string;
  products?: Product[];
  subCategories?: BusinessCategory[];
}

export const businessCategories: BusinessCategory[] = [
  {
    title: "Pharmaceutical",
    slug: "pharmaceutical",
    description: "Diabetic, Cardio, Neuro & more.",
  },
  {
    title: "ARTHROPLASTY", // Main section
    slug: "arthroplasty",
    subCategories: [
      {
        title: "Knee",
        slug: "surgicals-knee",
        description: "Knee replacement systems.",
      },
      {
        title: "Shoulder",
        slug: "surgicals-shoulder",
        description: "Shoulder replacement solutions.",
      },
      {
        title: "Equinoxe Platform",
        slug: "surgicals-equinoxe",
        description: "Platform shoulder system.",
      },
      {
        title: "Hip",
        slug: "surgicals-hip",
        description: "Hip replacement implants.",
      },
      {
        title: "Tumour Prosthesis",
        slug: "surgicals-tumour",
        description: "Limb salvage solutions.",
      },
    ],
  },
  {
    title: "Trauma",
    slug: "surgicals-trauma",
    description: "Nails, Plates & Screws.",
  },
  {
    title: "Spine",
    slug: "surgicals-spine",
    description: "Cages & Fixation Systems.",
  },
  {
    title: "Orthopedic Aids",
    slug: "orthopedic-aids",
    subCategories: [
      {
        title: "Ankle Support",
        slug: "ankle-support",
        products: [
          {
            title: "Ankle Binder Stripes & Checks AS-1",
            image:
              "/images/products/Orthopedic Aids/Ankle Support/Ankle Binder Stripes & Checks AS-1.jpg",
          },
          {
            title: "Ankle Brace xls",
            image:
              "/images/products/Orthopedic Aids/Ankle Support/Ankle Brace xls.jpg",
          },
          {
            title: "Ankle Grip Stripes & Checks AS-9",
            image:
              "/images/products/Orthopedic Aids/Ankle Support/Ankle Grip Stripes & Checks AS-9.jpg",
          },
          {
            title: "Ankle Grip Stripes & Checks",
            image:
              "/images/products/Orthopedic Aids/Ankle Support/Ankle Grip Stripes & Checks.jpg",
          },
          {
            title: "Ankle Support Stripes & Checks AS-8",
            image:
              "/images/products/Orthopedic Aids/Ankle Support/Ankle Support Stripes & Checks AS-8.jpg",
          },
          {
            title: "Bunion Splints",
            image:
              "/images/products/Orthopedic Aids/Ankle Support/Bunion Splints.jpg",
          },
          {
            title: "Compression Stocking Class II AS_13",
            image:
              "/images/products/Orthopedic Aids/Ankle Support/Compression Stocking Class II AS_13.jpg",
          },
          {
            title: "Compression Stockings AS_05",
            image:
              "/images/products/Orthopedic Aids/Ankle Support/Compression Stockings AS_05.jpg",
          },
          {
            title: "Tubular Ankle Support",
            image:
              "/images/products/Orthopedic Aids/Ankle Support/Tubular Ankle Support.jpg",
          },
          {
            title: "Varicose Vein Stockings Below Knee AS-5",
            image:
              "/images/products/Orthopedic Aids/Ankle Support/Varicose Vein Stockings Below Knee AS-5.jpg",
          },
          {
            title: "Varicose Vein Stockings Mid Thigh AS-5",
            image:
              "/images/products/Orthopedic Aids/Ankle Support/Varicose Vein Stockings Mid Thigh AS-5.jpg",
          },
          {
            title: "walker boot long",
            image:
              "/images/products/Orthopedic Aids/Ankle Support/walker boot long.jpg",
          },
          {
            title: "walker boot small",
            image:
              "/images/products/Orthopedic Aids/Ankle Support/walker boot small.jpg",
          },
        ],
      },
      {
        title: "Body Supports & Belts",
        slug: "body-supports-belts",
        products: [
          {
            title: "Abdominal Support 8 BS-1",
            image:
              "/images/products/Orthopedic Aids/Body Supports & Belts/Abdominal Support 8 BS-1.jpg",
          },
          {
            title: "Ankle Support Stripes & Checks AS-8",
            image:
              "/images/products/Orthopedic Aids/Body Supports & Belts/Ankle Support Stripes & Checks AS-8.jpg",
          },
          {
            title: "BS-01 ABDOMINAL SUPPORT 8 INCHES",
            image:
              "/images/products/Orthopedic Aids/Body Supports & Belts/BS-01 ABDOMINAL SUPPORT 8 INCHES.JPG",
          },
          {
            title: "BS-02 ABDOMINAL SUPPORT 10 INCHES",
            image:
              "/images/products/Orthopedic Aids/Body Supports & Belts/BS-02 ABDOMINAL SUPPORT 10 INCHES.JPG",
          },
          {
            title: "BS-03 LUMBO SACRAL SUPPORT",
            image:
              "/images/products/Orthopedic Aids/Body Supports & Belts/BS-03 LUMBO SACRAL SUPPORT.JPG",
          },
          {
            title: "BS-04 CONTOURED LUMBO SACRAL SUPPORT",
            image:
              "/images/products/Orthopedic Aids/Body Supports & Belts/BS-04 CONTOURED LUMBO SACRAL SUPPORT.JPG",
          },
          {
            title: "BS-10 CONTOURED LS 12 INCHES",
            image:
              "/images/products/Orthopedic Aids/Body Supports & Belts/BS-10 CONTOURED LS 12 INCHES.JPG",
          },
          {
            title: "Back rest BS-8",
            image:
              "/images/products/Orthopedic Aids/Body Supports & Belts/Back rest BS-8.jpg",
          },
          {
            title: "Breathable LS with Mesh Fabric BS-18",
            image:
              "/images/products/Orthopedic Aids/Body Supports & Belts/Breathable LS with Mesh Fabric BS-18.jpg",
          },
          {
            title: "Chest Binder BS-15",
            image:
              "/images/products/Orthopedic Aids/Body Supports & Belts/Chest Binder BS-15.jpg",
          },
          {
            title: "Cocyx Cushion BS-9",
            image:
              "/images/products/Orthopedic Aids/Body Supports & Belts/Cocyx Cushion BS-9.jpg",
          },
          {
            title: "Hernia Belt BS-6",
            image:
              "/images/products/Orthopedic Aids/Body Supports & Belts/Hernia Belt BS-6.jpg",
          },
          {
            title: "Lacepull",
            image:
              "/images/products/Orthopedic Aids/Body Supports & Belts/Lacepull.jpg",
          },
          {
            title: "Lumbar Support Universal BS-14",
            image:
              "/images/products/Orthopedic Aids/Body Supports & Belts/Lumbar Support Universal BS-14.jpg",
          },
          {
            title: "Lumbo Sacral Support BS-3",
            image:
              "/images/products/Orthopedic Aids/Body Supports & Belts/Lumbo Sacral Support BS-3.jpg",
          },
          {
            title: "Pelvic Binder BS-16",
            image:
              "/images/products/Orthopedic Aids/Body Supports & Belts/Pelvic Binder BS-16.jpg",
          },
          {
            title: "Posture Corrector BS-17",
            image:
              "/images/products/Orthopedic Aids/Body Supports & Belts/Posture Corrector BS-17.jpg",
          },
        ],
      },
      {
        title: "Cervical Supports",
        slug: "cervical-supports",
        products: [
          {
            title: "Boneless Soft Collar CS-5",
            image:
              "/images/products/Orthopedic Aids/Cervical Supports/Boneless Soft Collar CS-5.jpg",
          },
          {
            title: "Cervical Collar Hard Adjustable CS-1",
            image:
              "/images/products/Orthopedic Aids/Cervical Supports/Cervical Collar Hard Adjustable CS-1.jpg",
          },
          {
            title: "Cervical Collar Soft CS-2",
            image:
              "/images/products/Orthopedic Aids/Cervical Supports/Cervical Collar Soft CS-2.jpg",
          },
          {
            title: "Cervical Orthosis CS-3",
            image:
              "/images/products/Orthopedic Aids/Cervical Supports/Cervical Orthosis CS-3.jpg",
          },
          {
            title: "Cervical Pillow CS-4",
            image:
              "/images/products/Orthopedic Aids/Cervical Supports/Cervical Pillow CS-4.jpg",
          },
          {
            title: "Cervical Pillow Stripes & Checks CS-7",
            image:
              "/images/products/Orthopedic Aids/Cervical Supports/Cervical Pillow Stripes & Checks CS-7.jpg",
          },
          {
            title: "Contoured Cervical Pillow CS-6",
            image:
              "/images/products/Orthopedic Aids/Cervical Supports/Contoured Cervical Pillow CS-6.jpg",
          },
        ],
      },
      {
        title: "Finger Support",
        slug: "finger-support",
        products: [
          {
            title: "Finger Splint FS-1",
            image:
              "/images/products/Orthopedic Aids/Finger Support/Finger Splint FS-1.jpg",
          },
          {
            title: "Frog Splint FS-2",
            image:
              "/images/products/Orthopedic Aids/Finger Support/Frog Splint FS-2.jpg",
          },
          {
            title: "Mallet Finger Splint FS-3",
            image:
              "/images/products/Orthopedic Aids/Finger Support/Mallet Finger Splint FS-3.jpg",
          },
          {
            title: "WS-10 THUMB SPICA",
            image:
              "/images/products/Orthopedic Aids/Finger Support/WS-10 THUMB SPICA.JPG",
          },
        ],
      },
      {
        title: "Fracture Aids",
        slug: "fracture-aids",
        products: [
          {
            title: "Arm Strap FA-9",
            image:
              "/images/products/Orthopedic Aids/Fracture Aids/Arm Strap FA-9.jpg",
          },
          {
            title: "CAST SHOE FA-3",
            image:
              "/images/products/Orthopedic Aids/Fracture Aids/CAST SHOE FA-3.jpg",
          },
          {
            title: "Cuff & Collar Sling FA-10",
            image:
              "/images/products/Orthopedic Aids/Fracture Aids/Cuff & Collar Sling FA-10.jpg",
          },
          {
            title: "Elastic Shoulder Immobiliser",
            image:
              "/images/products/Orthopedic Aids/Fracture Aids/Elastic Shoulder Immobiliser.JPG",
          },
          {
            title: "FA-01 ARM SLING",
            image:
              "/images/products/Orthopedic Aids/Fracture Aids/FA-01 ARM SLING.JPG",
          },
          {
            title: "FA-04 CLAVICLE BRACE",
            image:
              "/images/products/Orthopedic Aids/Fracture Aids/FA-04 CLAVICLE BRACE.JPG",
          },
          {
            title: "FA-05 ELASTIC SHOULDER IMMOBILISER",
            image:
              "/images/products/Orthopedic Aids/Fracture Aids/FA-05 ELASTIC SHOULDER IMMOBILISER.JPG",
          },
          {
            title: "FA-06 RIB SUPPORT",
            image:
              "/images/products/Orthopedic Aids/Fracture Aids/FA-06 RIB SUPPORT.JPG",
          },
          {
            title: "FA-08 UNIVERSAL SHOULDER IMMOBILISER",
            image:
              "/images/products/Orthopedic Aids/Fracture Aids/FA-08 UNIVERSAL SHOULDER IMMOBILISER.JPG",
          },
          {
            title: "Sling - Stripes & Checks FA-12",
            image:
              "/images/products/Orthopedic Aids/Fracture Aids/Sling - Stripes & Checks FA-12.jpg",
          },
          {
            title: "Slings with Pockets FA-13",
            image:
              "/images/products/Orthopedic Aids/Fracture Aids/Slings with Pockets FA-13.jpg",
          },
          {
            title: "Taylor Brace FA-7",
            image:
              "/images/products/Orthopedic Aids/Fracture Aids/Taylor Brace FA-7.jpg",
          },
        ],
      },
      {
        title: "Gel Products",
        slug: "gel-products",
        products: [
          {
            title: "2-3 Insole with High Arch",
            image:
              "/images/products/Orthopedic Aids/Gel Products/2-3 Insole with High Arch.jpg",
          },
          {
            title: "Arch Support",
            image:
              "/images/products/Orthopedic Aids/Gel Products/Arch Support.jpg",
          },
          {
            title: "Diabetic Socks",
            image:
              "/images/products/Orthopedic Aids/Gel Products/Diabetic Socks.jpg",
          },
          {
            title: "Exercising Gel Ball Blue",
            image:
              "/images/products/Orthopedic Aids/Gel Products/Exercising Gel Ball Blue.jpg",
          },
          {
            title: "Exercising Gel Ball Red",
            image:
              "/images/products/Orthopedic Aids/Gel Products/Exercising Gel Ball Red.jpg",
          },
          {
            title: "Heel Cushion Gel",
            image:
              "/images/products/Orthopedic Aids/Gel Products/Heel Cushion Gel.jpg",
          },
          {
            title: "Heel Cushion Silion",
            image:
              "/images/products/Orthopedic Aids/Gel Products/Heel Cushion Silion.jpg",
          },
          {
            title: "Insole Gel wtih Arch",
            image:
              "/images/products/Orthopedic Aids/Gel Products/Insole Gel wtih Arch.jpg",
          },
          {
            title: "Insole with arc Support",
            image:
              "/images/products/Orthopedic Aids/Gel Products/Insole with arc Support.jpg",
          },
          {
            title: "Ladies Heel Cushion",
            image:
              "/images/products/Orthopedic Aids/Gel Products/Ladies Heel Cushion.jpg",
          },
          {
            title: "Metatarsal Pad",
            image:
              "/images/products/Orthopedic Aids/Gel Products/Metatarsal Pad.jpg",
          },
          {
            title: "Strip Heel Cup",
            image:
              "/images/products/Orthopedic Aids/Gel Products/Strip Heel Cup.jpg",
          },
          {
            title: "Toe Spreader with Bunion Shield",
            image:
              "/images/products/Orthopedic Aids/Gel Products/Toe Spreader with Bunion Shield.jpg",
          },
          {
            title: "Toe Spreader with Loop",
            image:
              "/images/products/Orthopedic Aids/Gel Products/Toe Spreader with Loop.jpg",
          },
        ],
      },
      {
        title: "Knee Supports",
        slug: "knee-supports",
        products: [
          {
            title: "Compression Stocking Below Knee",
            image:
              "/images/products/Orthopedic Aids/Knee Supports/Compression Stocking Below Knee.jpg",
          },
          {
            title: "HINGE KNEE BRACE",
            image:
              "/images/products/Orthopedic Aids/Knee Supports/HINGE KNEE BRACE.JPG",
          },
          {
            title: "Knee Immobiliser 14",
            image:
              "/images/products/Orthopedic Aids/Knee Supports/Knee Immobiliser 14.jpg",
          },
          {
            title: "Knee Immobiliser 19",
            image:
              "/images/products/Orthopedic Aids/Knee Supports/Knee Immobiliser 19.jpg",
          },
          {
            title: "Knee Immobiliser 22",
            image:
              "/images/products/Orthopedic Aids/Knee Supports/Knee Immobiliser 22.jpg",
          },
          {
            title: "Knee Support KS-4 (3)",
            image:
              "/images/products/Orthopedic Aids/Knee Supports/Knee Support KS-4 (3).jpg",
          },
          {
            title: "Knee Support Stripes & Checks KS-14",
            image:
              "/images/products/Orthopedic Aids/Knee Supports/Knee Support Stripes & Checks KS-14.jpg",
          },
          {
            title: "Motion Control Knee Brace KS-15",
            image:
              "/images/products/Orthopedic Aids/Knee Supports/Motion Control Knee Brace KS-15.jpg",
          },
          {
            title: "Patellar Support KS-12",
            image:
              "/images/products/Orthopedic Aids/Knee Supports/Patellar Support KS-12.jpg",
          },
          {
            title: "Thigh Support",
            image:
              "/images/products/Orthopedic Aids/Knee Supports/Thigh Support.jpg",
          },
          {
            title: "Tub Knee Support Open Patella KS-8",
            image:
              "/images/products/Orthopedic Aids/Knee Supports/Tub Knee Support Open Patella KS-8.jpg",
          },
          {
            title: "Tubular Knee Black",
            image:
              "/images/products/Orthopedic Aids/Knee Supports/Tubular Knee Black.jpg",
          },
          {
            title: "Tubular Knee Grey",
            image:
              "/images/products/Orthopedic Aids/Knee Supports/Tubular Knee Grey.jpg",
          },
          {
            title: "Tubular Knee Support",
            image:
              "/images/products/Orthopedic Aids/Knee Supports/Tubular Knee Support.jpg",
          },
          {
            title: "Tubular Knee Suppot stand Beige",
            image:
              "/images/products/Orthopedic Aids/Knee Supports/Tubular Knee Suppot stand Beige.jpg",
          },
          {
            title: "Tubular Knee Suppot stand Blue",
            image:
              "/images/products/Orthopedic Aids/Knee Supports/Tubular Knee Suppot stand Blue.jpg",
          },
          {
            title: "Varicose Vein Below Knee",
            image:
              "/images/products/Orthopedic Aids/Knee Supports/Varicose Vein Below Knee.jpg",
          },
          {
            title: "Varicose Vein Stockings",
            image:
              "/images/products/Orthopedic Aids/Knee Supports/Varicose Vein Stockings.jpg",
          },
        ],
      },
      {
        title: "Wrist & Forearm Support",
        slug: "wrist-forearm-support",
        products: [
          {
            title: "Elastic Wrist Splint WS-7",
            image:
              "/images/products/Orthopedic Aids/Wrist & Forearm  Support/Elastic Wrist Splint WS-7.jpg",
          },
          {
            title: "Elbow Support Stripes & Checks WS-12",
            image:
              "/images/products/Orthopedic Aids/Wrist & Forearm  Support/Elbow Support Stripes & Checks WS-12.jpg",
          },
          {
            title: "Elbow Support WS-2",
            image:
              "/images/products/Orthopedic Aids/Wrist & Forearm  Support/Elbow Support WS-2.jpg",
          },
          {
            title: "NP-02 NEOPRENE WRIST BINDER DOUBLE LOCK",
            image:
              "/images/products/Orthopedic Aids/Wrist & Forearm  Support/NP-02 NEOPRENE WRIST BINDER DOUBLE LOCK.JPG",
          },
          {
            title: "Neoprene tennis Elbow  WS-3",
            image:
              "/images/products/Orthopedic Aids/Wrist & Forearm  Support/Neoprene tennis Elbow  WS-3.jpg",
          },
          {
            title: "Thumb Support Stripes & Checks WS-6",
            image:
              "/images/products/Orthopedic Aids/Wrist & Forearm  Support/Thumb Support Stripes & Checks WS-6.jpg",
          },
          {
            title: "WS-01 COCKUP SPLINT",
            image:
              "/images/products/Orthopedic Aids/Wrist & Forearm  Support/WS-01 COCKUP SPLINT.JPG",
          },
          {
            title: "WS-03 NEOPRENE TENNIS ELBOW",
            image:
              "/images/products/Orthopedic Aids/Wrist & Forearm  Support/WS-03 NEOPRENE TENNIS ELBOW.JPG",
          },
          {
            title: "WS-06 THUMB SUPPORT",
            image:
              "/images/products/Orthopedic Aids/Wrist & Forearm  Support/WS-06 THUMB SUPPORT.JPG",
          },
          {
            title: "Wrist & Forearm Brace WS-11",
            image:
              "/images/products/Orthopedic Aids/Wrist & Forearm  Support/Wrist & Forearm Brace WS-11.jpg",
          },
          {
            title: "Wrist Wrap - Stripes & Checks WS-5",
            image:
              "/images/products/Orthopedic Aids/Wrist & Forearm  Support/Wrist Wrap - Stripes & Checks WS-5.jpg",
          },
          {
            title: "Wrist binder Stripes & Checks - WS-4",
            image:
              "/images/products/Orthopedic Aids/Wrist & Forearm  Support/Wrist binder Stripes & Checks - WS-4.jpg",
          },
        ],
      },
    ],
  },
];

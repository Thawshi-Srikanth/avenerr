export interface Product {
  title: string;
  image: string;
  link?: string;
  supplier?: string;
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
        products: [
          {
            title: "ExactechGPS Knee Applications",
            supplier: "Exactech",
            image: "/images/products/Knee/ExactechGPS Knee Applications.jpg",
          },
          {
            title: "InterSpace Trust the Science",
            supplier: "Exactech",
            image: "/images/products/Knee/InterSpace Trust the Science.jpg",
          },
          {
            title: "Optetrak Logic CC Revision System",
            supplier: "Exactech",
            image:
              "/images/products/Knee/Optetrak Logic CC Revision System.png",
          },
          {
            title: "Optetrak Logic Primary System",
            supplier: "Exactech",
            image: "/images/products/Knee/Optetrak Logic Primary System.png",
          },
          {
            title: "Optetrak Revision System",
            supplier: "Exactech",
            image: "/images/products/Knee/Optetrak revision System.png",
          },
          {
            title: "Truliant Knee System",
            supplier: "Exactech",
            image: "/images/products/Knee/Truliant Knee System.jpg",
          },
          {
            title: "Truliant Porous Knee",
            supplier: "Exactech",
            image: "/images/products/Knee/Truliant Porous Knee.png",
          },
          {
            title: "Truliant Primary Knee",
            supplier: "Exactech",
            image: "/images/products/Knee/Truliant Primary Knee.jpg",
          },
          {
            title: "Truliant Revision Knee System",
            supplier: "Exactech",
            image: "/images/products/Knee/Truliant Revision Knee System.png",
          },
        ],
      },
      {
        title: "Shoulder",
        slug: "surgicals-shoulder",
        description: "Shoulder replacement solutions.",
        products: [
          {
            title: "Equinoxe Fracture System",
            supplier: "Exactech",
            image: "/images/products/Shoulder/Equinoxe Fracture System.png",
          },
          {
            title: "Equinoxe Humeral Reconstruction Prosthesis",
            supplier: "Exactech",
            image:
              "/images/products/Shoulder/Equinoxe Humeral Reconstruction Prosthesis.png",
          },
          {
            title: "Equinoxe Platform System",
            supplier: "Exactech",
            image: "/images/products/Shoulder/Equinoxe Platform System.png",
          },
          {
            title: "Equinoxe Preserve Stem",
            supplier: "Exactech",
            image: "/images/products/Shoulder/Equinoxe Preserve Stem.png",
          },
          {
            title: "Equinoxe Primary System",
            supplier: "Exactech",
            image: "/images/products/Shoulder/Equinoxe Primary System.png",
          },
          {
            title: "Equinoxe Resurfacing Head",
            supplier: "Exactech",
            image: "/images/products/Shoulder/Equinoxe Resurfacing Head.png",
          },
          {
            title: "Equinoxe Reverse System",
            supplier: "Exactech",
            image: "/images/products/Shoulder/Equinoxe Reverse System.png",
          },
          {
            title: "Equinoxe Shoulder Planning App",
            supplier: "Exactech",
            image:
              "/images/products/Shoulder/Equinoxe Shoulder Planning App.png",
          },
          {
            title: "Equinoxe Small Reverse Shoulder",
            supplier: "Exactech",
            image:
              "/images/products/Shoulder/Equinoxe Small Reverse Shoulder.png",
          },
          {
            title: "Equinoxe Stemless Shoulder",
            supplier: "Exactech",
            image: "/images/products/Shoulder/Equinoxe Stemless Shoulder.png",
          },
          {
            title: "ExactechGPS Shoulder Application",
            supplier: "Exactech",
            image:
              "/images/products/Shoulder/ExactechGPS Shoulder Application.png",
          },
          {
            title: "InterSpace Shoulder",
            supplier: "Exactech",
            image: "/images/products/Shoulder/InterSpace Shoulder.png",
          },
          {
            title: "Reverse Shoulder Replacement",
            supplier: "Exactech",
            image: "/images/products/Shoulder/Reverse Shoulder Replacement.jpg",
          },
          {
            title: "Shoulder Hemiarthroplasty",
            supplier: "Exactech",
            image: "/images/products/Shoulder/Shoulder Hemiarthroplasty.jpg",
          },
          {
            title: "Total Shoulder Replacement",
            supplier: "Exactech",
            image: "/images/products/Shoulder/Total Shoulder Replacement.jpg",
          },
        ],
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
        products: [
          {
            title: "Distal Femur Megaprosthesis",
            image:
              "/images/products/Tumour Prosthesis/Distal Femur Megaprosthesis.jpg",
          },
          {
            title: "Proximal Femur Megaprosthesis",
            image:
              "/images/products/Tumour Prosthesis/Proximal Femur Megaprosthesis.jpg",
          },
          {
            title: "Proximal Tibia Megaprosthesis",
            image:
              "/images/products/Tumour Prosthesis/Proximal Tibia Megaprosthesis.jpg",
          },
        ],
      },
    ],
  },
  {
    title: "Trauma",
    slug: "surgicals-trauma",
    description: "Nails, Plates & Screws.",
    products: [
      {
        title: "4.5 & 6.5 cc",
        supplier: "Miraculous",
        image: "/images/products/Trauma/4.5 & 6.5 cc.jpg",
      },
      {
        title: "ASLP System",
        supplier: "Miraculous",
        image: "/images/products/Trauma/aslp system.jpg",
      },
      {
        title: "DVR 2.4 System",
        supplier: "Miraculous",
        image: "/images/products/Trauma/dvr 2.4 system.jpg",
      },
      {
        title: "Elbow Plating System",
        supplier: "Miraculous",
        image: "/images/products/Trauma/elbow plating system.jpg",
      },
      {
        title: "Headless Compression Screw",
        supplier: "Miraculous",
        image: "/images/products/Trauma/headless compression screw.jpg",
      },
      {
        title: "LVM Plates",
        supplier: "Miraculous",
        image: "/images/products/Trauma/lvm plates.jpg",
      },
      {
        title: "ML-Tibia Nail",
        supplier: "Miraculous",
        image: "/images/products/Trauma/ml-tibia nail.jpg",
      },
      {
        title: "PFAN System",
        supplier: "Miraculous",
        image: "/images/products/Trauma/pfan-system.jpg",
      },
      {
        title: "SL-Femur Nail",
        supplier: "Miraculous",
        image: "/images/products/Trauma/sl-femur nail.jpg",
      },
      {
        title: "SL-Tibia Nail",
        supplier: "Miraculous",
        image: "/images/products/Trauma/sl-tibia nail.jpg",
      },
      {
        title: "Valp – Distal Radius System",
        supplier: "Miraculous",
        image: "/images/products/Trauma/valp – distal radius system.jpg",
      },
    ],
  },
  {
    title: "Spine",
    slug: "surgicals-spine",
    description: "Cages & Fixation Systems.",
    products: [
      {
        title: "ACC – Cervical Cage",

        supplier: "Miraculous",
        image: "/images/products/Spine/acc – cervical cage.png",
      },
      {
        title: "ACC – Stand Alone Cage",

        supplier: "Miraculous",
        image: "/images/products/Spine/acc – stand alone cage.png",
      },
      {
        title: "ACP – Cervical Plate",

        supplier: "Miraculous",
        image: "/images/products/Spine/acp – cervical plate.png",
      },
      {
        title: "ALC – PLIF Lumber Cage",

        supplier: "Miraculous",
        image: "/images/products/Spine/alc – plif lumber cage.png",
      },
      {
        title: "ALC – TLIF Lumber Cage",

        supplier: "Miraculous",
        image: "/images/products/Spine/alc – tlif lumber cage.png",
      },
      {
        title: "MS – I Spinal Fixation System",

        supplier: "Miraculous",
        image: "/images/products/Spine/ms – i spinal fixation system.png",
      },
      {
        title: "PCF – Lateral Mass Screw",

        supplier: "Miraculous",
        image: "/images/products/Spine/pcf – lateral mass screw.png",
      },
    ],
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
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Ankle Support/Ankle Binder Stripes & Checks AS-1.jpg",
          },
          {
            title: "Ankle Brace xls",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Ankle Support/Ankle Brace xls.jpg",
          },
          {
            title: "Ankle Grip Stripes & Checks AS-9",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Ankle Support/Ankle Grip Stripes & Checks AS-9.jpg",
          },
          {
            title: "Ankle Grip Stripes & Checks",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Ankle Support/Ankle Grip Stripes & Checks.jpg",
          },
          {
            title: "Ankle Support Stripes & Checks AS-8",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Ankle Support/Ankle Support Stripes & Checks AS-8.jpg",
          },
          {
            title: "Bunion Splints",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Ankle Support/Bunion Splints.jpg",
          },
          {
            title: "Compression Stocking Class II AS_13",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Ankle Support/Compression Stocking Class II AS_13.jpg",
          },
          {
            title: "Compression Stockings AS_05",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Ankle Support/Compression Stockings AS_05.jpg",
          },
          {
            title: "Tubular Ankle Support",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Ankle Support/Tubular Ankle Support.jpg",
          },
          {
            title: "Varicose Vein Stockings Below Knee AS-5",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Ankle Support/Varicose Vein Stockings Below Knee AS-5.jpg",
          },
          {
            title: "Varicose Vein Stockings Mid Thigh AS-5",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Ankle Support/Varicose Vein Stockings Mid Thigh AS-5.jpg",
          },
          {
            title: "walker boot long",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Ankle Support/walker boot long.jpg",
          },
          {
            title: "walker boot small",
            supplier: "Neo Life",
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
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Body Supports & Belts/Abdominal Support 8 BS-1.jpg",
          },
          {
            title: "Ankle Support Stripes & Checks AS-8",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Body Supports & Belts/Ankle Support Stripes & Checks AS-8.jpg",
          },
          {
            title: "BS-01 ABDOMINAL SUPPORT 8 INCHES",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Body Supports & Belts/BS-01 ABDOMINAL SUPPORT 8 INCHES.JPG",
          },
          {
            title: "BS-02 ABDOMINAL SUPPORT 10 INCHES",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Body Supports & Belts/BS-02 ABDOMINAL SUPPORT 10 INCHES.JPG",
          },
          {
            title: "BS-03 LUMBO SACRAL SUPPORT",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Body Supports & Belts/BS-03 LUMBO SACRAL SUPPORT.JPG",
          },
          {
            title: "BS-04 CONTOURED LUMBO SACRAL SUPPORT",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Body Supports & Belts/BS-04 CONTOURED LUMBO SACRAL SUPPORT.JPG",
          },
          {
            title: "BS-10 CONTOURED LS 12 INCHES",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Body Supports & Belts/BS-10 CONTOURED LS 12 INCHES.JPG",
          },
          {
            title: "Back rest BS-8",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Body Supports & Belts/Back rest BS-8.jpg",
          },
          {
            title: "Breathable LS with Mesh Fabric BS-18",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Body Supports & Belts/Breathable LS with Mesh Fabric BS-18.jpg",
          },
          {
            title: "Chest Binder BS-15",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Body Supports & Belts/Chest Binder BS-15.jpg",
          },
          {
            title: "Cocyx Cushion BS-9",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Body Supports & Belts/Cocyx Cushion BS-9.jpg",
          },
          {
            title: "Hernia Belt BS-6",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Body Supports & Belts/Hernia Belt BS-6.jpg",
          },
          {
            title: "Lacepull",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Body Supports & Belts/Lacepull.jpg",
          },
          {
            title: "Lumbar Support Universal BS-14",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Body Supports & Belts/Lumbar Support Universal BS-14.jpg",
          },
          {
            title: "Lumbo Sacral Support BS-3",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Body Supports & Belts/Lumbo Sacral Support BS-3.jpg",
          },
          {
            title: "Pelvic Binder BS-16",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Body Supports & Belts/Pelvic Binder BS-16.jpg",
          },
          {
            title: "Posture Corrector BS-17",
            supplier: "Neo Life",
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
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Cervical Supports/Boneless Soft Collar CS-5.jpg",
          },
          {
            title: "Cervical Collar Hard Adjustable CS-1",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Cervical Supports/Cervical Collar Hard Adjustable CS-1.jpg",
          },
          {
            title: "Cervical Collar Soft CS-2",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Cervical Supports/Cervical Collar Soft CS-2.jpg",
          },
          {
            title: "Cervical Orthosis CS-3",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Cervical Supports/Cervical Orthosis CS-3.jpg",
          },
          {
            title: "Cervical Pillow CS-4",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Cervical Supports/Cervical Pillow CS-4.jpg",
          },
          {
            title: "Cervical Pillow Stripes & Checks CS-7",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Cervical Supports/Cervical Pillow Stripes & Checks CS-7.jpg",
          },
          {
            title: "Contoured Cervical Pillow CS-6",
            supplier: "Neo Life",
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
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Finger Support/Finger Splint FS-1.jpg",
          },
          {
            title: "Frog Splint FS-2",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Finger Support/Frog Splint FS-2.jpg",
          },
          {
            title: "Mallet Finger Splint FS-3",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Finger Support/Mallet Finger Splint FS-3.jpg",
          },
          {
            title: "WS-10 THUMB SPICA",
            supplier: "Neo Life",
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
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Fracture Aids/Arm Strap FA-9.jpg",
          },
          {
            title: "CAST SHOE FA-3",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Fracture Aids/CAST SHOE FA-3.jpg",
          },
          {
            title: "Cuff & Collar Sling FA-10",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Fracture Aids/Cuff & Collar Sling FA-10.jpg",
          },
          {
            title: "Elastic Shoulder Immobiliser",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Fracture Aids/Elastic Shoulder Immobiliser.JPG",
          },
          {
            title: "FA-01 ARM SLING",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Fracture Aids/FA-01 ARM SLING.JPG",
          },
          {
            title: "FA-04 CLAVICLE BRACE",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Fracture Aids/FA-04 CLAVICLE BRACE.JPG",
          },
          {
            title: "FA-05 ELASTIC SHOULDER IMMOBILISER",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Fracture Aids/FA-05 ELASTIC SHOULDER IMMOBILISER.JPG",
          },
          {
            title: "FA-06 RIB SUPPORT",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Fracture Aids/FA-06 RIB SUPPORT.JPG",
          },
          {
            title: "FA-08 UNIVERSAL SHOULDER IMMOBILISER",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Fracture Aids/FA-08 UNIVERSAL SHOULDER IMMOBILISER.JPG",
          },
          {
            title: "Sling - Stripes & Checks FA-12",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Fracture Aids/Sling - Stripes & Checks FA-12.jpg",
          },
          {
            title: "Slings with Pockets FA-13",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Fracture Aids/Slings with Pockets FA-13.jpg",
          },
          {
            title: "Taylor Brace FA-7",
            supplier: "Neo Life",
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
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Gel Products/2-3 Insole with High Arch.jpg",
          },
          {
            title: "Arch Support",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Gel Products/Arch Support.jpg",
          },
          {
            title: "Diabetic Socks",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Gel Products/Diabetic Socks.jpg",
          },
          {
            title: "Exercising Gel Ball Blue",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Gel Products/Exercising Gel Ball Blue.jpg",
          },
          {
            title: "Exercising Gel Ball Red",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Gel Products/Exercising Gel Ball Red.jpg",
          },
          {
            title: "Heel Cushion Gel",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Gel Products/Heel Cushion Gel.jpg",
          },
          {
            title: "Heel Cushion Silion",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Gel Products/Heel Cushion Silion.jpg",
          },
          {
            title: "Insole Gel wtih Arch",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Gel Products/Insole Gel wtih Arch.jpg",
          },
          {
            title: "Insole with arc Support",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Gel Products/Insole with arc Support.jpg",
          },
          {
            title: "Ladies Heel Cushion",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Gel Products/Ladies Heel Cushion.jpg",
          },
          {
            title: "Metatarsal Pad",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Gel Products/Metatarsal Pad.jpg",
          },
          {
            title: "Strip Heel Cup",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Gel Products/Strip Heel Cup.jpg",
          },
          {
            title: "Toe Spreader with Bunion Shield",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Gel Products/Toe Spreader with Bunion Shield.jpg",
          },
          {
            title: "Toe Spreader with Loop",
            supplier: "Neo Life",
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
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Knee Supports/Compression Stocking Below Knee.jpg",
          },
          {
            title: "HINGE KNEE BRACE",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Knee Supports/HINGE KNEE BRACE.JPG",
          },
          {
            title: "Knee Immobiliser 14",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Knee Supports/Knee Immobiliser 14.jpg",
          },
          {
            title: "Knee Immobiliser 19",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Knee Supports/Knee Immobiliser 19.jpg",
          },
          {
            title: "Knee Immobiliser 22",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Knee Supports/Knee Immobiliser 22.jpg",
          },
          {
            title: "Knee Support KS-4 (3)",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Knee Supports/Knee Support KS-4 (3).jpg",
          },
          {
            title: "Knee Support Stripes & Checks KS-14",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Knee Supports/Knee Support Stripes & Checks KS-14.jpg",
          },
          {
            title: "Motion Control Knee Brace KS-15",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Knee Supports/Motion Control Knee Brace KS-15.jpg",
          },
          {
            title: "Patellar Support KS-12",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Knee Supports/Patellar Support KS-12.jpg",
          },
          {
            title: "Thigh Support",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Knee Supports/Thigh Support.jpg",
          },
          {
            title: "Tub Knee Support Open Patella KS-8",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Knee Supports/Tub Knee Support Open Patella KS-8.jpg",
          },
          {
            title: "Tubular Knee Black",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Knee Supports/Tubular Knee Black.jpg",
          },
          {
            title: "Tubular Knee Grey",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Knee Supports/Tubular Knee Grey.jpg",
          },
          {
            title: "Tubular Knee Support",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Knee Supports/Tubular Knee Support.jpg",
          },
          {
            title: "Tubular Knee Suppot stand Beige",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Knee Supports/Tubular Knee Suppot stand Beige.jpg",
          },
          {
            title: "Tubular Knee Suppot stand Blue",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Knee Supports/Tubular Knee Suppot stand Blue.jpg",
          },
          {
            title: "Varicose Vein Below Knee",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Knee Supports/Varicose Vein Below Knee.jpg",
          },
          {
            title: "Varicose Vein Stockings",
            supplier: "Neo Life",
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
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Wrist & Forearm  Support/Elastic Wrist Splint WS-7.jpg",
          },
          {
            title: "Elbow Support Stripes & Checks WS-12",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Wrist & Forearm  Support/Elbow Support Stripes & Checks WS-12.jpg",
          },
          {
            title: "Elbow Support WS-2",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Wrist & Forearm  Support/Elbow Support WS-2.jpg",
          },
          {
            title: "NP-02 NEOPRENE WRIST BINDER DOUBLE LOCK",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Wrist & Forearm  Support/NP-02 NEOPRENE WRIST BINDER DOUBLE LOCK.JPG",
          },
          {
            title: "Neoprene tennis Elbow  WS-3",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Wrist & Forearm  Support/Neoprene tennis Elbow  WS-3.jpg",
          },
          {
            title: "Thumb Support Stripes & Checks WS-6",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Wrist & Forearm  Support/Thumb Support Stripes & Checks WS-6.jpg",
          },
          {
            title: "WS-01 COCKUP SPLINT",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Wrist & Forearm  Support/WS-01 COCKUP SPLINT.JPG",
          },
          {
            title: "WS-03 NEOPRENE TENNIS ELBOW",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Wrist & Forearm  Support/WS-03 NEOPRENE TENNIS ELBOW.JPG",
          },
          {
            title: "WS-06 THUMB SUPPORT",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Wrist & Forearm  Support/WS-06 THUMB SUPPORT.JPG",
          },
          {
            title: "Wrist & Forearm Brace WS-11",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Wrist & Forearm  Support/Wrist & Forearm Brace WS-11.jpg",
          },
          {
            title: "Wrist Wrap - Stripes & Checks WS-5",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Wrist & Forearm  Support/Wrist Wrap - Stripes & Checks WS-5.jpg",
          },
          {
            title: "Wrist binder Stripes & Checks - WS-4",
            supplier: "Neo Life",
            image:
              "/images/products/Orthopedic Aids/Wrist & Forearm  Support/Wrist binder Stripes & Checks - WS-4.jpg",
          },
        ],
      },
    ],
  },
];

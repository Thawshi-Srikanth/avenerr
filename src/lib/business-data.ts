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
  type?: "tag";
}

export const businessCategories: BusinessCategory[] = [
  {
    title: "Pharmaceuticals",
    slug: "pharmaceuticals",
  },
  {
    title: "Neutraceuticals",
    slug: "neutraceuticals",
  },
  {
    title: "Medical Devices",
    slug: "medical-devices",
    subCategories: [
      {
        title: "Orthopedic Aids",
        slug: "orthopedic-aids",
        subCategories: [
          {
            title: "Ankle Supports",
            slug: "ankle-supports",
            products: [
              {
                title: "Ankle Binder Stripes & Checks AS-1",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/ankle-support/ankle-binder-stripes-checks-as-1.jpg",
              },
              {
                title: "Ankle Brace xls",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/ankle-support/ankle-brace-xls.jpg",
              },
              {
                title: "Ankle Grip Stripes & Checks AS-9",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/ankle-support/ankle-grip-stripes-checks-as-9.jpg",
              },
              {
                title: "Ankle Grip Stripes & Checks",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/ankle-support/ankle-grip-stripes-checks.jpg",
              },
              {
                title: "Ankle Support Stripes & Checks AS-8",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/ankle-support/ankle-support-stripes-checks-as-8.jpg",
              },
              {
                title: "Bunion Splints",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/ankle-support/bunion-splints.jpg",
              },
              {
                title: "Compression Stocking Class II AS_13",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/ankle-support/compression-stocking-class-ii-as13.jpg",
              },
              {
                title: "Compression Stockings AS_05",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/ankle-support/compression-stockings-as05.jpg",
              },
              {
                title: "Tubular Ankle Support",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/ankle-support/tubular-ankle-support.jpg",
              },
              {
                title: "Varicose Vein Stockings Below Knee AS-5",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/ankle-support/varicose-vein-stockings-below-knee-as-5.jpg",
              },
              {
                title: "Varicose Vein Stockings Mid Thigh AS-5",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/ankle-support/varicose-vein-stockings-mid-thigh-as-5.jpg",
              },
              {
                title: "walker boot long",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/ankle-support/walker-boot-long.jpg",
              },
              {
                title: "walker boot small",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/ankle-support/walker-boot-small.jpg",
              },
            ],
          },
          {
            title: "Body Support Belts",
            slug: "body-support-belts",
            products: [
              {
                title: "Abdominal Support 8 BS-1",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/body-supports-belts/abdominal-support-8-bs-1.jpg",
              },
              {
                title: "Ankle Support Stripes & Checks AS-8",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/body-supports-belts/ankle-support-stripes-checks-as-8.jpg",
              },
              {
                title: "BS-01 ABDOMINAL SUPPORT 8 INCHES",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/body-supports-belts/bs-01-abdominal-support-8-inches.jpg",
              },
              {
                title: "BS-02 ABDOMINAL SUPPORT 10 INCHES",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/body-supports-belts/bs-02-abdominal-support-10-inches.jpg",
              },
              {
                title: "BS-03 LUMBO SACRAL SUPPORT",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/body-supports-belts/bs-03-lumbo-sacral-support.jpg",
              },
              {
                title: "BS-04 CONTOURED LUMBO SACRAL SUPPORT",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/body-supports-belts/bs-04-contoured-lumbo-sacral-support.jpg",
              },
              {
                title: "BS-10 CONTOURED LS 12 INCHES",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/body-supports-belts/bs-10-contoured-ls-12-inches.jpg",
              },
              {
                title: "Back rest BS-8",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/body-supports-belts/back-rest-bs-8.jpg",
              },
              {
                title: "Breathable LS with Mesh Fabric BS-18",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/body-supports-belts/breathable-ls-with-mesh-fabric-bs-18.jpg",
              },
              {
                title: "Chest Binder BS-15",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/body-supports-belts/chest-binder-bs-15.jpg",
              },
              {
                title: "Cocyx Cushion BS-9",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/body-supports-belts/cocyx-cushion-bs-9.jpg",
              },
              {
                title: "Hernia Belt BS-6",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/body-supports-belts/hernia-belt-bs-6.jpg",
              },
              {
                title: "Lacepull",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/body-supports-belts/lacepull.jpg",
              },
              {
                title: "Lumbar Support Universal BS-14",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/body-supports-belts/lumbar-support-universal-bs-14.jpg",
              },
              {
                title: "Lumbo Sacral Support BS-3",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/body-supports-belts/lumbo-sacral-support-bs-3.jpg",
              },
              {
                title: "Pelvic Binder BS-16",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/body-supports-belts/pelvic-binder-bs-16.jpg",
              },
              {
                title: "Posture Corrector BS-17",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/body-supports-belts/posture-corrector-bs-17.jpg",
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
                  "/images/products/orthopedic-aids/cervical-supports/boneless-soft-collar-cs-5.jpg",
              },
              {
                title: "Cervical Collar Hard Adjustable CS-1",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/cervical-supports/cervical-collar-hard-adjustable-cs-1.jpg",
              },
              {
                title: "Cervical Collar Soft CS-2",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/cervical-supports/cervical-collar-soft-cs-2.jpg",
              },
              {
                title: "Cervical Orthosis CS-3",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/cervical-supports/cervical-orthosis-cs-3.jpg",
              },
              {
                title: "Cervical Pillow CS-4",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/cervical-supports/cervical-pillow-cs-4.jpg",
              },
              {
                title: "Cervical Pillow Stripes & Checks CS-7",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/cervical-supports/cervical-pillow-stripes-checks-cs-7.jpg",
              },
              {
                title: "Contoured Cervical Pillow CS-6",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/cervical-supports/contoured-cervical-pillow-cs-6.jpg",
              },
            ],
          },
          {
            title: "Finger Supports",
            slug: "finger-supports",
            products: [
              {
                title: "Finger Splint FS-1",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/finger-support/finger-splint-fs-1.jpg",
              },
              {
                title: "Frog Splint FS-2",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/finger-support/frog-splint-fs-2.jpg",
              },
              {
                title: "Mallet Finger Splint FS-3",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/finger-support/mallet-finger-splint-fs-3.jpg",
              },
              {
                title: "WS-10 THUMB SPICA",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/finger-support/ws-10-thumb-spica.jpg",
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
                  "/images/products/orthopedic-aids/fracture-aids/arm-strap-fa-9.jpg",
              },
              {
                title: "CAST SHOE FA-3",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/fracture-aids/cast-shoe-fa-3.jpg",
              },
              {
                title: "Cuff & Collar Sling FA-10",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/fracture-aids/cuff-collar-sling-fa-10.jpg",
              },
              {
                title: "Elastic Shoulder Immobiliser",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/fracture-aids/elastic-shoulder-immobiliser.jpg",
              },
              {
                title: "FA-01 ARM SLING",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/fracture-aids/fa-01-arm-sling.jpg",
              },
              {
                title: "FA-04 CLAVICLE BRACE",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/fracture-aids/fa-04-clavicle-brace.jpg",
              },
              {
                title: "FA-05 ELASTIC SHOULDER IMMOBILISER",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/fracture-aids/fa-05-elastic-shoulder-immobiliser.jpg",
              },
              {
                title: "FA-06 RIB SUPPORT",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/fracture-aids/fa-06-rib-support.jpg",
              },
              {
                title: "FA-08 UNIVERSAL SHOULDER IMMOBILISER",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/fracture-aids/fa-08-universal-shoulder-immobiliser.jpg",
              },
              {
                title: "Sling - Stripes & Checks FA-12",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/fracture-aids/sling-stripes-checks-fa-12.jpg",
              },
              {
                title: "Slings with Pockets FA-13",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/fracture-aids/slings-with-pockets-fa-13.jpg",
              },
              {
                title: "Taylor Brace FA-7",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/fracture-aids/taylor-brace-fa-7.jpg",
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
                  "/images/products/orthopedic-aids/gel-products/2-3-insole-with-high-arch.jpg",
              },
              {
                title: "Arch Support",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/gel-products/arch-support.jpg",
              },
              {
                title: "Diabetic Socks",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/gel-products/diabetic-socks.jpg",
              },
              {
                title: "Exercising Gel Ball Blue",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/gel-products/exercising-gel-ball-blue.jpg",
              },
              {
                title: "Exercising Gel Ball Red",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/gel-products/exercising-gel-ball-red.jpg",
              },
              {
                title: "Heel Cushion Gel",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/gel-products/heel-cushion-gel.jpg",
              },
              {
                title: "Heel Cushion Silion",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/gel-products/heel-cushion-silion.jpg",
              },
              {
                title: "Insole Gel wtih Arch",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/gel-products/insole-gel-wtih-arch.jpg",
              },
              {
                title: "Insole with arc Support",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/gel-products/insole-with-arc-support.jpg",
              },
              {
                title: "Ladies Heel Cushion",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/gel-products/ladies-heel-cushion.jpg",
              },
              {
                title: "Metatarsal Pad",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/gel-products/metatarsal-pad.jpg",
              },
              {
                title: "Strip Heel Cup",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/gel-products/strip-heel-cup.jpg",
              },
              {
                title: "Toe Spreader with Bunion Shield",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/gel-products/toe-spreader-with-bunion-shield.jpg",
              },
              {
                title: "Toe Spreader with Loop",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/gel-products/toe-spreader-with-loop.jpg",
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
                  "/images/products/orthopedic-aids/knee-supports/compression-stocking-below-knee.jpg",
              },
              {
                title: "HINGE KNEE BRACE",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/knee-supports/hinge-knee-brace.jpg",
              },
              {
                title: "Knee Immobiliser 14",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/knee-supports/knee-immobiliser-14.jpg",
              },
              {
                title: "Knee Immobiliser 19",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/knee-supports/knee-immobiliser-19.jpg",
              },
              {
                title: "Knee Immobiliser 22",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/knee-supports/knee-immobiliser-22.jpg",
              },
              {
                title: "Knee Support KS-4 (3)",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/knee-supports/knee-support-ks-4-3.jpg",
              },
              {
                title: "Knee Support Stripes & Checks KS-14",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/knee-supports/knee-support-stripes-checks-ks-14.jpg",
              },
              {
                title: "Motion Control Knee Brace KS-15",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/knee-supports/motion-control-knee-brace-ks-15.jpg",
              },
              {
                title: "Patellar Support KS-12",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/knee-supports/patellar-support-ks-12.jpg",
              },
              {
                title: "Thigh Support",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/knee-supports/thigh-support.jpg",
              },
              {
                title: "Tub Knee Support Open Patella KS-8",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/knee-supports/tub-knee-support-open-patella-ks-8.jpg",
              },
              {
                title: "Tubular Knee Black",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/knee-supports/tubular-knee-black.jpg",
              },
              {
                title: "Tubular Knee Grey",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/knee-supports/tubular-knee-grey.jpg",
              },
              {
                title: "Tubular Knee Support",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/knee-supports/tubular-knee-support.jpg",
              },
              {
                title: "Tubular Knee Suppot stand Beige",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/knee-supports/tubular-knee-suppot-stand-beige.jpg",
              },
              {
                title: "Tubular Knee Suppot stand Blue",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/knee-supports/tubular-knee-suppot-stand-blue.jpg",
              },
              {
                title: "Varicose Vein Below Knee",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/knee-supports/varicose-vein-below-knee.jpg",
              },
              {
                title: "Varicose Vein Stockings",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/knee-supports/varicose-vein-stockings.jpg",
              },
            ],
          },
          {
            title: "Wrist & Forearm Supports",
            slug: "wrist-forearm-supports",
            products: [
              {
                title: "Elastic Wrist Splint WS-7",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/wrist-forearm-support/elastic-wrist-splint-ws-7.jpg",
              },
              {
                title: "Elbow Support Stripes & Checks WS-12",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/wrist-forearm-support/elbow-support-stripes-checks-ws-12.jpg",
              },
              {
                title: "Elbow Support WS-2",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/wrist-forearm-support/elbow-support-ws-2.jpg",
              },
              {
                title: "NP-02 NEOPRENE WRIST BINDER DOUBLE LOCK",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/wrist-forearm-support/np-02-neoprene-wrist-binder-double-lock.jpg",
              },
              {
                title: "Neoprene tennis Elbow  WS-3",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/wrist-forearm-support/neoprene-tennis-elbow-ws-3.jpg",
              },
              {
                title: "Thumb Support Stripes & Checks WS-6",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/wrist-forearm-support/thumb-support-stripes-checks-ws-6.jpg",
              },
              {
                title: "WS-01 COCKUP SPLINT",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/wrist-forearm-support/ws-01-cockup-splint.jpg",
              },
              {
                title: "WS-03 NEOPRENE TENNIS ELBOW",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/wrist-forearm-support/ws-03-neoprene-tennis-elbow.jpg",
              },
              {
                title: "WS-06 THUMB SUPPORT",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/wrist-forearm-support/ws-06-thumb-support.jpg",
              },
              {
                title: "Wrist & Forearm Brace WS-11",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/wrist-forearm-support/wrist-forearm-brace-ws-11.jpg",
              },
              {
                title: "Wrist Wrap - Stripes & Checks WS-5",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/wrist-forearm-support/wrist-wrap-stripes-checks-ws-5.jpg",
              },
              {
                title: "Wrist binder Stripes & Checks - WS-4",
                supplier: "Neo Life",
                image:
                  "/images/products/orthopedic-aids/wrist-forearm-support/wrist-binder-stripes-checks-ws-4.jpg",
              },
            ],
          },
        ],
      },
      {
        title: "Orthopedic Implants",
        slug: "orthopedic-implants",
        // type: "tag",
        subCategories: [
          {
            title: "Arthroplasty",
            slug: "arthroplasty",
            subCategories: [
              {
                title: "Knee Prosthesis",
                slug: "knee-prosthesis",
                products: [
                  {
                    title: "ExactechGPS Knee Applications",
                    supplier: "Exactech",
                    image:
                      "/images/products/knee/exactechgps-knee-applications.jpg",
                  },
                  {
                    title: "InterSpace Trust the Science",
                    supplier: "Exactech",
                    image:
                      "/images/products/knee/interspace-trust-the-science.jpg",
                  },
                  {
                    title: "Optetrak Logic CC Revision System",
                    supplier: "Exactech",
                    image:
                      "/images/products/knee/optetrak-logic-cc-revision-system.png",
                  },
                  {
                    title: "Optetrak Logic Primary System",
                    supplier: "Exactech",
                    image:
                      "/images/products/knee/optetrak-logic-primary-system.png",
                  },
                  {
                    title: "Optetrak Revision System",
                    supplier: "Exactech",
                    image: "/images/products/knee/optetrak-revision-system.png",
                  },
                  {
                    title: "Truliant Knee System",
                    supplier: "Exactech",
                    image: "/images/products/knee/truliant-knee-system.jpg",
                  },
                  {
                    title: "Truliant Porous Knee",
                    supplier: "Exactech",
                    image: "/images/products/knee/truliant-porous-knee.png",
                  },
                  {
                    title: "Truliant Primary Knee",
                    supplier: "Exactech",
                    image: "/images/products/knee/truliant-primary-knee.jpg",
                  },
                  {
                    title: "Truliant Revision Knee System",
                    supplier: "Exactech",
                    image:
                      "/images/products/knee/truliant-revision-knee-system.png",
                  },
                ],
              },
              {
                title: "Hip Prosthesis",
                slug: "hip-prosthesis",
              },
              {
                title: "Shoulder Prosthesis",
                slug: "shoulder-prosthesis",
                products: [
                  {
                    title: "Equinoxe Fracture System",
                    supplier: "Exactech",
                    image:
                      "/images/products/shoulder/equinoxe-fracture-system.png",
                  },
                  {
                    title: "Equinoxe Humeral Reconstruction Prosthesis",
                    supplier: "Exactech",
                    image:
                      "/images/products/shoulder/equinoxe-humeral-reconstruction-prosthesis.png",
                  },
                  {
                    title: "Equinoxe Platform System",
                    supplier: "Exactech",
                    image:
                      "/images/products/shoulder/equinoxe-platform-system.png",
                  },
                  {
                    title: "Equinoxe Preserve Stem",
                    supplier: "Exactech",
                    image:
                      "/images/products/shoulder/equinoxe-preserve-stem.png",
                  },
                  {
                    title: "Equinoxe Primary System",
                    supplier: "Exactech",
                    image:
                      "/images/products/shoulder/equinoxe-primary-system.png",
                  },
                  {
                    title: "Equinoxe Resurfacing Head",
                    supplier: "Exactech",
                    image:
                      "/images/products/shoulder/equinoxe-resurfacing-head.png",
                  },
                  {
                    title: "Equinoxe Reverse System",
                    supplier: "Exactech",
                    image:
                      "/images/products/shoulder/equinoxe-reverse-system.png",
                  },
                  {
                    title: "Equinoxe Shoulder Planning App",
                    supplier: "Exactech",
                    image:
                      "/images/products/shoulder/equinoxe-shoulder-planning-app.png",
                  },
                  {
                    title: "Equinoxe Small Reverse Shoulder",
                    supplier: "Exactech",
                    image:
                      "/images/products/shoulder/equinoxe-small-reverse-shoulder.png",
                  },
                  {
                    title: "Equinoxe Stemless Shoulder",
                    supplier: "Exactech",
                    image:
                      "/images/products/shoulder/equinoxe-stemless-shoulder.png",
                  },
                  {
                    title: "ExactechGPS Shoulder Application",
                    supplier: "Exactech",
                    image:
                      "/images/products/shoulder/exactechgps-shoulder-application.png",
                  },
                  {
                    title: "InterSpace Shoulder",
                    supplier: "Exactech",
                    image: "/images/products/shoulder/interspace-shoulder.png",
                  },
                  {
                    title: "Reverse Shoulder Replacement",
                    supplier: "Exactech",
                    image:
                      "/images/products/shoulder/reverse-shoulder-replacement.jpg",
                  },
                  {
                    title: "Shoulder Hemiarthroplasty",
                    supplier: "Exactech",
                    image:
                      "/images/products/shoulder/shoulder-hemiarthroplasty.jpg",
                  },
                  {
                    title: "Total Shoulder Replacement",
                    supplier: "Exactech",
                    image:
                      "/images/products/shoulder/total-shoulder-replacement.jpg",
                  },
                ],
              },
              {
                title: "Tumor Prosthesis",
                slug: "tumor-prosthesis",
                products: [
                  {
                    title: "Distal Femur Megaprosthesis",
                    image:
                      "/images/products/tumour-prosthesis/distal-femur-megaprosthesis.jpg",
                  },
                  {
                    title: "Proximal Femur Megaprosthesis",
                    image:
                      "/images/products/tumour-prosthesis/proximal-femur-megaprosthesis.jpg",
                  },
                  {
                    title: "Proximal Tibia Megaprosthesis",
                    image:
                      "/images/products/tumour-prosthesis/proximal-tibia-megaprosthesis.jpg",
                  },
                ],
              },
            ],
          },
          {
            title: "Trauma",
            slug: "trauma",
            subCategories: [
              {
                title: "Plates",
                slug: "plates",
                products: [
                  {
                    title: "ASLP System",
                    supplier: "Miraculous",
                    image: "/images/products/trauma/aslp-system.jpg",
                  },
                  {
                    title: "DVR 2.4 System",
                    supplier: "Miraculous",
                    image: "/images/products/trauma/dvr-24-system.jpg",
                  },
                  {
                    title: "Elbow Plating System",
                    supplier: "Miraculous",
                    image: "/images/products/trauma/elbow-plating-system.jpg",
                  },
                  {
                    title: "LVM Plates",
                    supplier: "Miraculous",
                    image: "/images/products/trauma/lvm-plates.jpg",
                  },
                  {
                    title: "Valp – Distal Radius System",
                    supplier: "Miraculous",
                    image:
                      "/images/products/trauma/valp-distal-radius-system.jpg",
                  },
                ],
              },
              {
                title: "Screws",
                slug: "screws",
                products: [
                  {
                    title: "4.5 & 6.5 cc",
                    supplier: "Miraculous",
                    image: "/images/products/trauma/45-65-cc.jpg",
                  },
                  {
                    title: "Headless Compression Screw",
                    supplier: "Miraculous",
                    image:
                      "/images/products/trauma/headless-compression-screw.jpg",
                  },
                ],
              },
              {
                title: "Nails",
                slug: "nails",
                products: [
                  {
                    title: "ML-Tibia Nail",
                    supplier: "Miraculous",
                    image: "/images/products/trauma/ml-tibia-nail.jpg",
                  },
                  {
                    title: "PFAN System",
                    supplier: "Miraculous",
                    image: "/images/products/trauma/pfan-system.jpg",
                  },
                  {
                    title: "SL-Femur Nail",
                    supplier: "Miraculous",
                    image: "/images/products/trauma/sl-femur-nail.jpg",
                  },
                  {
                    title: "SL-Tibia Nail",
                    supplier: "Miraculous",
                    image: "/images/products/trauma/sl-tibia-nail.jpg",
                  },
                ],
              },
            ],
          },
          {
            title: "Spine Implants",
            slug: "spine-implants",
            products: [
              {
                title: "ACC – Cervical Cage",
                supplier: "Miraculous",
                image: "/images/products/spine/acc-cervical-cage.png",
              },
              {
                title: "ACC – Stand Alone Cage",
                supplier: "Miraculous",
                image: "/images/products/spine/acc-stand-alone-cage.png",
              },
              {
                title: "ACP – Cervical Plate",
                supplier: "Miraculous",
                image: "/images/products/spine/acp-cervical-plate.png",
              },
              {
                title: "ALC – PLIF Lumber Cage",
                supplier: "Miraculous",
                image: "/images/products/spine/alc-plif-lumber-cage.png",
              },
              {
                title: "ALC – TLIF Lumber Cage",
                supplier: "Miraculous",
                image: "/images/products/spine/alc-tlif-lumber-cage.png",
              },
              {
                title: "MS – I Spinal Fixation System",
                supplier: "Miraculous",
                image:
                  "/images/products/spine/ms-i-spinal-fixation-system.png",
              },
              {
                title: "PCF – Lateral Mass Screw",
                supplier: "Miraculous",
                image: "/images/products/spine/pcf-lateral-mass-screw.png",
              },
            ],
          },
          {
            title: "Bone Substitutes",
            slug: "bone-substitutes",
          },
        ],
      },
      {
        title: "Bio Surgical Products",
        slug: "bio-surgical-products",
        products: [
          {
            title: "Hemostat",
            supplier: "Meril",
            image: "/images/products/bio-surgical/hemostat.png",
          },
          {
            title: "Skin stepler",
            supplier: "Mirus",
            image: "/images/products/bio-surgical/skin-stepler.png",
          },
        ],
      },
      {
        title: "Medical Technology",
        slug: "medical-technology",
        subCategories: [
          {
            title: "Navigation",
            slug: "navigation",
            products: [
              {
                title: "Hip Navigation",
                supplier: "Naviswiss",
                image: "/images/products/medical-technology/hip-navigation.png",
              },
              {
                title: "Knee Navigation",
                supplier: "Naviswiss",
                image:
                  "/images/products/medical-technology/knee-navigation.png",
              },
            ],
          },
          {
            title: "Robotics",
            slug: "robotics",
            products: [
              {
                title: "Hyalofast",
                supplier: "Plus orthopedics",
                image: "/images/products/medical-technology/hyalofast.png",
              },
              {
                title: "Miniaturized Handheld Smart Assisted Surgery System",
                supplier: "Naviswiss",
                image: "/images/partner-placeholder.png",
              },
            ],
          },
        ],
      },
      {
        title: "Diagnostics",
        slug: "diagnostics",
      },
    ],
  },
];

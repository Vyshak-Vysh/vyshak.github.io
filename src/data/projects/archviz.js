export default { 
    id: 2,
    show: true,
    slug: 'ranwin-inspection',
    link: '/project/ranwin-inspection',
    cardImage: '/images/publications/ranwin/cover.png',
    title: 'Ranwin Industrial AR Inspection Project' ,
    role: 'AR Developer',
    types: ['Industrial AR', 'Large-Scale Assets', 'Unity'],
    shortDescription: 'A large-scale industrial AR inspection project focused on structural accuracy before logistics and transportation using ARKit and Vuforia Model Targets.',
    tags: ['AR', 'ARKit', 'Vuforia', 'Industrial', 'Structural Analysis'],
    link1:[''],
    citation:'',
    mainArt: {
      type: 'image',
      src: 'images/publications/ranwin/main.jpg',
      alt: 'Ranwin Inspection System',
      description: ''
    },
    secondaryArt: {
      type: 'image',
      src: 'images/publications/ranwin/secondary.jpg',
      alt: 'Structural Overlay',
      description: ''
    },
    summaryHtml: `
      <h3>Overview</h3>
      <p>
      A comprehensive industrial AR inspection platform designed for structural validation and dimensional deviation detection 
      in large-scale industrial assets like iron columns and beams. The solution integrates cutting-edge AR frameworks 
      (ARKit and Vuforia Model Targets) to provide accurate digital overlays for logistics and transportation validation.
      </p>
      
      <h3>Key Features</h3>
      <ul>
        <li><strong>ARKit Integration:</strong> Native iOS implementation for seamless device compatibility</li>
        <li><strong>Vuforia Model Targets:</strong> Advanced model-based tracking for precise asset alignment</li>
        <li><strong>Digital Reference Models:</strong> Real-time overlay of CAD models on physical structures</li>
        <li><strong>Dimensional Validation:</strong> Early-stage deviation detection before shipment</li>
      </ul>

      <h3>Business Impact</h3>
      <ul>
        <li>Prevented costly rework in logistics operations</li>
        <li>Reduced inspection time by 40%</li>
        <li>Improved accuracy in structural assessment</li>
        <li>Enhanced quality assurance before transportation</li>
      </ul>

      <h3>Technical Implementation</h3>
      <p>Swift (iOS), ARKit, Vuforia Engine, 3D Model Optimization, Spatial Mapping</p>
    `,
  
    gallery: [
      {
        type: 'image',
        src: '/images/publications/ranwin/main.jpg',
        alt: 'Large-Scale Inspection',
        topText: '',
        bottomText: 'Industrial asset inspection in action'
      },
      {
        type: 'image',
        src: '/images/publications/ranwin/secondary.jpg',
        alt: 'Structural Analysis',
        topText: '',
        bottomText: 'Digital overlay for dimensional validation'
      }
    ]
}

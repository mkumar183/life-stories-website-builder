import sharp from 'sharp';

async function optimizeImage() {
  try {
    await sharp('public/images/profile.jpg')
      .resize(1200)
      .jpeg({ quality: 80 })
      .toFile('public/images/profile-optimized.jpg');
    console.log('Image optimized successfully!');
  } catch (error) {
    console.error('Error optimizing image:', error);
  }
}

optimizeImage(); 
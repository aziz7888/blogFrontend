import React from "react";
import MainLayout from "../../components/MainLayout";

const ContactUs = () => (
  <MainLayout>
    <div className="container mx-auto py-10 px-5">
      <h1 className="text-3xl font-bold mb-5">Contact Us</h1>
      <p>If you have any questions, feel free to reach out to us at:</p>
      <p>Email: support@bloogboom.com</p>
      <p>Phone: +1 (123) 456-7890</p>
      <p>Address: 123 Blog Street, New York, USA</p>
      <h2 className="text-xl font-semibold mt-5">Business Hours</h2>
      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
      <p>Saturday - Sunday: Closed</p>
      <h2 className="text-xl font-semibold mt-5">Follow Us</h2>
      <p>Facebook | Twitter | Instagram | LinkedIn</p>
    </div>
  </MainLayout>
);

const AboutUs = () => (
  <MainLayout>
    <div className="container mx-auto py-10 px-5">
      <h1 className="text-3xl font-bold mb-5">About Us</h1>
      <p>
        BloogBoom is a premier blogging platform bringing the latest news,
        articles, and insights on various topics including technology, finance,
        health, and lifestyle. Our mission is to keep readers informed and
        engaged with high-quality content.
      </p>
      <h2 className="text-xl font-semibold mt-5">Our Vision</h2>
      <p>
        To create a world where knowledge is easily accessible and shared freely
        among individuals, fostering a community of curious minds.
      </p>
      <h2 className="text-xl font-semibold mt-5">Our Team</h2>
      <p>
        Our team consists of passionate writers, editors, and developers who are
        dedicated to delivering high-quality and engaging content.
      </p>
    </div>
  </MainLayout>
);

const FAQ = () => (
  <MainLayout>
    <div className="container mx-auto py-10 px-5">
      <h1 className="text-3xl font-bold mb-5">Frequently Asked Questions</h1>
      <h2 className="text-xl font-semibold mt-4">1. How can I submit a blog post?</h2>
      <p>You can submit your blog post via our submission page after registration.</p>
      <h2 className="text-xl font-semibold mt-4">2. Is BloogBoom free to use?</h2>
      <p>Yes, BloogBoom is free for both readers and writers.</p>
      <h2 className="text-xl font-semibold mt-4">3. How can I advertise on BloogBoom?</h2>
      <p>
        We offer various advertising options for businesses and brands. Please contact
        us for more details on advertising packages.
      </p>
      <h2 className="text-xl font-semibold mt-4">4. Can I delete my account?</h2>
      <p>
        Yes, you can delete your account anytime from your profile settings.
      </p>
    </div>
  </MainLayout>
);

const TermsAndConditions = () => (
  <MainLayout>
    <div className="container mx-auto py-10 px-5">
      <h1 className="text-3xl font-bold mb-5">Terms and Conditions</h1>
      <p>
        By accessing BloogBoom, you agree to our terms and conditions. Content
        submitted must adhere to our guidelines. We reserve the right to remove
        any inappropriate content.
      </p>
      <h2 className="text-xl font-semibold mt-5">User Responsibilities</h2>
      <p>
        Users must ensure that their content does not contain hate speech, plagiarism,
        or any offensive material.
      </p>
      <h2 className="text-xl font-semibold mt-5">Copyright Policy</h2>
      <p>
        All content published on BloogBoom remains the intellectual property of its
        respective authors. Unauthorized reproduction is prohibited.
      </p>
      <h2 className="text-xl font-semibold mt-5">Privacy Policy</h2>
      <p>
        We respect your privacy. Any personal information shared with BloogBoom will
        be kept confidential and not shared with third parties.
      </p>
    </div>
  </MainLayout>
  
);
const PrivacyPolicy = () => (
    <MainLayout>
      <div className="container mx-auto py-10 px-5">
        <h1 className="text-3xl font-bold mb-5">Privacy Policy</h1>
        <p>
          Your privacy is important to us. This privacy policy outlines how we collect,
          use, and protect your information when you use BloogBoom.
        </p>
        <h2 className="text-xl font-semibold mt-5">Information Collection</h2>
        <p>
          We collect information such as your name, email, and usage data to improve
          our services and provide a better experience.
        </p>
        <h2 className="text-xl font-semibold mt-5">Data Protection</h2>
        <p>
          We implement security measures to protect your personal data from unauthorized
          access, alteration, or disclosure.
        </p>
        <h2 className="text-xl font-semibold mt-5">Third-Party Services</h2>
        <p>
          We do not share your personal information with third parties unless required
          by law.
        </p>
        <h2 className="text-xl font-semibold mt-5">Changes to Policy</h2>
        <p>
          We may update this policy from time to time. Users will be notified of
          significant changes.
        </p>
      </div>
    </MainLayout>
  );

export { ContactUs, AboutUs, FAQ, TermsAndConditions,PrivacyPolicy };
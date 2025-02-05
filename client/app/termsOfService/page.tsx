
export default function TermsOfService() {
  return (
    <section className='w-full p-4 space-y-6 flex flex-col items-center justify-center bg-slate-900 text-slate-50'>
      <div className='flex flex-col items-center gap-2'>
        <h1 className='md:text-4xl font-bold'>Spensify - Terms of Service</h1>
        <p className='text-xl'>Welcome to the Terms of Service</p>
      </div>

      <div className='w-full max-w-2xl text-slate-50'>
        <h2>Effective Date: 2025-02-05</h2>
        <p>Welcome to <strong>Spensify!</strong> By using our app, you agree to the following terms and conditions. Please read them carefully.</p>
      </div>

      <ul className='flex flex-col gap-6 max-w-2xl'>
        <li>
          <h3 className='text-xl font-bold'>1. Introduction</h3>
          <p>Spensify provides a financial tracking application to help users manage their expenses, income, and savings. These Terms of Service terms govern your use of the Spensify mobile app and services.

            By accessing or using Spensify, you agree to be bound by these Terms. If you do not agree, please do not use the app.</p>
        </li>

        <li>
          <h3 className='text-xl font-bold'>2. Eligibility</h3>
          <p>You must be at least 18 years old or have legal parental/guardian consent to use Spensify. By using the app, you confirm that you meet this requirement.</p>
        </li>

        <li>
          <h3 className='text-xl font-bold'>3. Account Registration</h3>
          <ul>
            <li>
              <p>You must create an account to use certain features.</p>
            </li>
            <li>
              <p>You are responsible for maintaining the confidentiality of your account credentials.</p>
            </li>
            <li>
              <p>Any activity occurring under your account is your responsibility.</p>
            </li>
          </ul>
        </li>

        <li>
          <h3 className='text-xl font-bold'>4. Subscription & Payments</h3>
          <p>Spensify offers both free and premium subscription plans.</p>
          <ul>
            <li>
              <p>Free Plan: Limited access to features.</p>
            </li>
            <li>
              <p>Premium Plan: Additional features available through a paid subscription.</p>
            </li>
            <li>
              <p>Billing: Subscriptions are billed automatically through the App Store or Google Play.</p>
            </li>
            <li>
              <p>Cancellation: You can cancel your subscription anytime via your device settings.</p>
            </li>
            <li>
              <p>Refunds: Payments are non-refundable except where required by law.</p>
            </li>
          </ul>
        </li>

        <li>
          <h3 className='text-xl font-bold'>5. Acceptable Use</h3>
          <p>You agree NOT to:</p>
          <ol>
            <li>
              <p>Use Spensify for any illegal, fraudulent, or harmful activity.</p>
            </li>
            <li>
              <p>Interfere with the app&apos;s functionality or security.</p>
            </li>
            <li>
              <p>Misuse any financial data or third-party integrations.</p>
            </li>
          </ol>
        </li>

        <li>
          <h3 className='text-xl font-bold'>6. Data Privacy</h3>
          <p>Spensify is designed to assist with financial tracking, but we do not provide financial, tax, or investment advice. We are not responsible for any financial decisions made based on the app&apos;s data.</p>
        </li>


        <li>
          <h3 className='text-xl font-bold'>7. Limitation of Liability</h3>
          <p>We respect your privacy. Please review our <a target='_blank' href='https://www.freeprivacypolicy.com/live/fb8d57fe-b74b-4319-a6e1-a6490090f987' className='text-blue-500'>Privacy Policy </a> for details on how we collect, store, and use your information.</p>
        </li>


        <li>
          <h3 className='text-xl font-bold'>8. Modifications to Terms</h3>
          <p>We may update these Terms from time to time. Continued use of Spensify after changes means you accept the revised Terms.</p>
        </li>

        <li>
          <h3 className='text-xl font-bold'>9. Contact Us</h3>
          <p>For questions or concerns about these Terms, please contact us at <a href="mailto:lucas.ds.developer@gmail.com" className='text-blue-500'>lucas.ds.developer@gmail.com</a></p>
        </li>
      </ul>
    </section>
  )
}

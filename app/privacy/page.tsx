import type { Metadata } from "next";
import Link from "next/link";
import { GrievanceOfficer, LegalPage, LegalTable } from "@/components/legal/LegalPage";
import { LEGAL } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy | KOODAL",
  description: "How KOODAL collects, uses, shares and protects your personal data under India's DPDP Act, 2023.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <h2>1. Who we are</h2>
      <p>
        KOODAL collects only the personal data it needs to help you find people for activities in Chennai, never
        sells it, and lets you delete it at any time.
      </p>
      <ul>
        <li>
          KOODAL (&quot;we&quot;, &quot;us&quot;) is operated by {LEGAL.entityName}, Chennai, Tamil Nadu. We are
          the Data Fiduciary for your personal data under the Digital Personal Data Protection Act, 2023 (&quot;DPDP
          Act&quot;) and the DPDP Rules, 2025.
        </li>
        <li>This policy covers the KOODAL mobile app, plan-share pages at koodal.social, and our support channels.</li>
        <li>
          It should be read with our <Link href="/terms">Terms and Conditions</Link>.
        </li>
      </ul>

      <h2>2. What we collect</h2>
      <LegalTable
        head={["Data", "Where it comes from", "Required?"]}
        rows={[
          ["Mobile number", "You, at sign-in; verified by SMS code", "Yes"],
          ["Consent record (Terms and Privacy versions accepted, time)", "Created at sign-in", "Yes"],
          ["18+ confirmation", "You, during profile setup", "Yes"],
          ["Display name", "You", "Before creating or joining a plan"],
          ["Profile photo", "You (gallery or camera)", "No"],
          ["Gender", "You", "No"],
          ["Preferred area and interests, including “Other” text", "You", "No"],
          ["Plans you host: activity, date, venue, people needed, note, cover photo", "You", "When hosting"],
          ["Joins: requests, join messages, join commitment (version and time), RSVP", "You", "When joining"],
          ["Attendance and reliability (plans attended, no-shows)", "You, hosts, and app records", "Created by use"],
          ["Plan chat messages", "You and other members", "When you chat"],
          ["Reports and blocks you make, and reports about you", "You and other users", "Created by use"],
          ["Device data: device ID, platform, app version, push token, hashed IP address", "Your device", "Yes"],
          ["Usage events (screens viewed, buttons tapped, errors)", "The app", "Yes"],
          ["Support and grievance messages", "You", "When you contact us"],
        ]}
      />
      <p>
        <strong>Venue search:</strong> when you search for a venue, your search words are sent to Google Places to
        find public venues.
      </p>

      <h2>3. What we do not collect</h2>
      <ul>
        <li>Your contacts or address book.</li>
        <li>Your home address or precise location history. You choose a general area instead.</li>
        <li>Your date of birth. We only ask you to confirm you are 18 or older.</li>
        <li>Your SMS inbox. Code autofill works without SMS read permission.</li>
        <li>Payment or bank details. KOODAL does not process payments.</li>
        <li>Location data from photos. We strip location (EXIF) data from uploaded cover photos.</li>
      </ul>

      <h2>4. How we use your data</h2>
      <p>
        We process your data on the basis of your consent, given when you sign in, and for uses the DPDP Act allows
        without fresh consent, such as meeting legal obligations.
      </p>
      <LegalTable
        head={["Purpose", "Data used"]}
        rows={[
          ["Create and secure your account, sign you in, keep you signed in", "Mobile number, device data"],
          ["Show you relevant plans", "Area, interests"],
          ["Let you host, join and chat in plans", "Profile, plans, joins, chat messages"],
          ["Run women-only and men-only plans", "Gender"],
          ["Send reminders and updates (“Still coming?”, join requests, plan changes)", "Push token, plans, joins"],
          ["Reduce no-shows and show reliability", "Join commitment, RSVP, attendance"],
          [
            "Keep users safe: review reports, block, suspend, prevent abuse and SMS fraud",
            "Reports, blocks, account and device data, hashed IP",
          ],
          ["Improve the app and fix problems", "Usage events, error logs"],
          ["Respond to support and grievance requests", "Your messages, account data"],
          ["Meet legal obligations and lawful requests", "Any data needed for that request"],
        ]}
      />
      <p>We do not sell your personal data, and we do not use it for third-party advertising.</p>
      <p>
        <strong>Withdrawing consent.</strong> You can withdraw consent at any time by deleting your account in
        Settings or by contacting us. This does not affect processing already done. We need your mobile number to
        run your account, so withdrawing consent ends your use of the Service.
      </p>

      <h2>5. What other people can see</h2>
      <LegalTable
        head={["Who", "What they can see"]}
        rows={[
          [
            "Any KOODAL user",
            "Your display name, profile photo, badges (“Verified phone”, “Shows up”), number of plans attended and hosted, and the plans you host",
          ],
          ["Hosts of plans you request to join", "The above, plus your join message and attendance record"],
          ["Host and accepted members of a plan", "Who else has been accepted, and messages in that plan’s chat"],
          [
            "Anyone with a share link",
            "The plan title, activity, time, area, venue name, spots left, cover and the host’s first name",
          ],
        ]}
      />
      <p>
        We never show your mobile number, gender, preferred area or interests to other users. Users you block cannot
        see your profile or plans.
      </p>

      <h2>6. Who we share data with</h2>
      <p>
        We share personal data only with service providers that help us run KOODAL, under contracts that limit their
        use to our instructions, and with authorities when the law requires.
      </p>
      <LegalTable
        head={["Provider", "What they do", "Data they handle"]}
        rows={[
          ["MSG91", "Sends sign-in codes by SMS", "Mobile number, code"],
          ["[Render / Railway]", "Hosts our servers", "All app data"],
          ["[Neon / Supabase]", "Hosts our database", "All app data"],
          ["Cloudflare (R2)", "Stores and delivers photos", "Profile and cover photos"],
          ["Expo, Google (FCM), Apple (APNs)", "Deliver push notifications", "Push token, notification text"],
          ["Google Places", "Venue search", "Search words, venue chosen"],
          ["PostHog", "Product analytics", "User ID, usage events (never your number, name or gender)"],
        ]}
      />
      <p>
        We may also disclose data to police, courts or government agencies when required by law, or to protect
        someone&apos;s safety. If KOODAL is merged or sold, your data may transfer to the new owner under this
        policy.
      </p>

      <h2>7. Where your data is stored</h2>
      <p>
        We store data in the region closest to India that each provider offers, such as Mumbai or Singapore. Some
        providers may process data in other countries. We transfer data outside India only as the DPDP Act and any
        government restrictions allow, and we require providers to protect it.
      </p>

      <h2>8. How long we keep it</h2>
      <LegalTable
        head={["Data", "Kept for"]}
        rows={[
          ["Profile, plans, joins, attendance", "While your account is active"],
          ["Sign-in codes (stored only in hashed form)", "24 hours"],
          ["Login sessions", "30 days after they expire or you log out"],
          ["Uploaded photos never attached to a plan", "24 hours"],
          ["Reports and moderation records", "2 years"],
          ["Support and grievance messages", "[2 years]"],
          ["Usage analytics", "[12 months]"],
        ]}
      />
      <p>
        <strong>When you delete your account,</strong> we cancel your hosted upcoming plans, remove you from plans
        you joined, end your sessions, and delete your photo, mobile number, name, gender, area and interests. We
        keep an anonymised record of past plans and reports for safety and legal reasons. The same number can be used
        to sign up again.
      </p>

      <h2>9. Your rights and choices</h2>
      <p>Under the DPDP Act you can:</p>
      <ul>
        <li>
          <strong>Access</strong> a summary of the personal data we hold about you and how we use it.
        </li>
        <li>
          <strong>Correct or update</strong> your data. Most of it you can edit in the app.
        </li>
        <li>
          <strong>Erase</strong> your data by deleting your account in Settings, or by asking us.
        </li>
        <li>
          <strong>Withdraw consent</strong> at any time (section 4).
        </li>
        <li>
          <strong>Nominate</strong> a person to exercise your rights if you die or become unable to.
        </li>
        <li>
          <strong>Raise a grievance</strong> with us (section 13), and if not satisfied, complain to the Data
          Protection Board of India.
        </li>
      </ul>
      <p>
        <strong>In-app choices:</strong> turn off notifications in your phone settings, skip optional fields, block
        users, and leave plans.
      </p>
      <p>
        To use these rights, email us from the app or at the address in section 13. We may ask you to confirm your
        mobile number to verify it is you, and we respond within the time the law requires.
      </p>

      <h2>10. Security</h2>
      <ul>
        <li>All data travels over HTTPS.</li>
        <li>Sign-in codes and session tokens are stored only in hashed form, and IP addresses are hashed.</li>
        <li>Mobile numbers, codes and tokens are removed from our logs and never sent to analytics.</li>
        <li>Access to production data is limited to the people who need it.</li>
        <li>Photos are stored privately and served through our CDN.</li>
      </ul>
      <p>
        No system is perfectly secure. If a personal data breach affects you, we will inform you and the Data
        Protection Board of India as the DPDP Act and Rules require, and tell you what we are doing about it.
      </p>

      <h2>11. Children</h2>
      <p>
        KOODAL is only for people aged 18 and over. We do not knowingly collect data from anyone under 18. If we
        learn an account belongs to someone under 18, we delete it. If you believe a child is using KOODAL, contact
        us.
      </p>

      <h2>12. Changes to this policy</h2>
      <p>
        We may update this policy as KOODAL changes or the law changes. For material changes, we will notify you in
        the app and ask you to accept the new version before you continue. The version you accepted and when are
        recorded.
      </p>

      <h2>13. Contact and grievances</h2>
      <p>For privacy questions, data requests or complaints, contact our Grievance Officer:</p>
      <GrievanceOfficer />
      <p>
        General support: <a href={`mailto:${LEGAL.supportEmail}`}>{LEGAL.supportEmail}</a>. If you are not
        satisfied with our response, you can complain to the Data Protection Board of India.
      </p>
    </LegalPage>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { GrievanceOfficer, LegalPage } from "@/components/legal/LegalPage";
import { LEGAL } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms and Conditions | KOODAL",
  description: "The terms that govern your use of the KOODAL app, plan-share pages and related services.",
  alternates: { canonical: "/terms" },
};

const support = <a href={`mailto:${LEGAL.supportEmail}`}>{LEGAL.supportEmail}</a>;

export default function TermsPage() {
  return (
    <LegalPage title="Terms and Conditions">
      <h2>1. About these Terms</h2>
      <p>
        These Terms and Conditions (&quot;Terms&quot;) are a binding agreement between you and {LEGAL.entityName}, a{" "}
        {LEGAL.entityType} registered in India with its office at {LEGAL.registeredAddress} (&quot;KOODAL&quot;,
        &quot;we&quot;, &quot;us&quot;). They govern your use of the KOODAL mobile app, the plan-share pages at
        koodal.social, and related services (together, the &quot;Service&quot;).
      </p>
      <ul>
        <li>
          You accept these Terms when you tap <strong>Send code</strong> on the sign-in screen, where the Terms and
          our <Link href="/privacy">Privacy Policy</Link> are linked. If you do not agree, do not use the Service.
        </li>
        <li>
          Our <Link href="/privacy">Privacy Policy</Link>, Safety Guidelines and Community Rules (section 8) form
          part of these Terms.
        </li>
        <li>
          These Terms are published as an electronic record under the Information Technology Act, 2000 and the rules
          under it, and do not need a physical or digital signature.
        </li>
      </ul>

      <h2>2. Who can use KOODAL</h2>
      <ul>
        <li>
          <strong>18 or older.</strong> You must be at least 18 years old and able to enter a binding contract under
          Indian law. You confirm this during sign-up. If we learn that a user is under 18, we will delete the
          account.
        </li>
        <li>
          <strong>Indian mobile number.</strong> You need an Indian mobile number (+91) that you own or are
          authorised to use, and that can receive SMS.
        </li>
        <li>
          <strong>One account per person.</strong> You may hold only one account. You may not create an account for
          someone else or share your account.
        </li>
        <li>
          <strong>Not previously removed.</strong> You may not use the Service if we have suspended or removed your
          account, unless we have restored it in writing.
        </li>
      </ul>

      <h2>3. Your account</h2>
      <ul>
        <li>
          <strong>Sign-in.</strong> You sign in with your mobile number and a one-time code sent by SMS. Never share
          this code with anyone; KOODAL staff will never ask for it.
        </li>
        <li>
          <strong>Your responsibility.</strong> You are responsible for activity on your account and for keeping your
          phone and number secure. Tell us at {support} if you think someone else has accessed your account.
        </li>
        <li>
          <strong>Accurate information.</strong> Your display name, photo and other profile details must be truthful
          and must not impersonate anyone. Your profile photo, if added, must show you.
        </li>
        <li>
          <strong>Gender.</strong> Gender is optional. If you set it, it decides whether you can see, host or join
          women-only and men-only plans. Setting a false gender to access these plans is a serious breach and may
          lead to permanent removal. Gender can be changed at most once every 30 days.
        </li>
        <li>
          <strong>Phone number privacy.</strong> Your phone number is never shown to other users. Do not ask other
          users for theirs unless they choose to share it.
        </li>
      </ul>

      <h2>4. How KOODAL works</h2>
      <p>
        KOODAL is a platform that helps people in Chennai find others to join activities. Users (&quot;hosts&quot;)
        post plans, and other users request to join them.
      </p>
      <ul>
        <li>
          <strong>We are not the organiser.</strong> KOODAL does not organise, run, supervise or attend any plan. Each
          plan is arranged by its host and the people who join. We are an intermediary under the Information
          Technology Act, 2000.
        </li>
        <li>
          <strong>No background checks.</strong> We verify that each account has a working Indian mobile number. We
          do not verify identity, age, skill, criminal history or character.
        </li>
        <li>
          <strong>No payments through KOODAL.</strong> The Service does not take or process payments. Any sharing of
          costs is between users (section 11).
        </li>
        <li>
          <strong>Availability.</strong> We aim to keep the Service running but do not promise it will always be
          available or error-free. We may change, add or remove features at any time.
        </li>
      </ul>

      <h2>5. Hosting a plan</h2>
      <p>If you host a plan, you agree to:</p>
      <ol>
        <li>
          <strong>Be accurate.</strong> Give the correct activity, date, time, venue and number of people needed.
          Mark the venue as booked only if it is booked.
        </li>
        <li>
          <strong>Use public venues.</strong> Plans must take place at a named public venue, such as a sports court,
          turf, café or park. Never use a home address or a private residence.
        </li>
        <li>
          <strong>Show up yourself.</strong> If you say you are joining, attend the plan.
        </li>
        <li>
          <strong>Choose fairly.</strong> You may accept or decline join requests, but not for reasons that are
          abusive or unlawful.
        </li>
        <li>
          <strong>Cancel early.</strong> If the plan cannot happen, cancel it in the app as early as possible so
          joiners are notified.
        </li>
        <li>
          <strong>Use plan settings honestly.</strong> Women-only and men-only plans are only for hosts whose profile
          gender matches, and only to meet that group of people. They must not be used to exclude people on any other
          ground.
        </li>
      </ol>
      <p>Hosts are responsible for any venue booking, venue rules, and the arrangements they make with joiners.</p>

      <h2>6. Joining a plan and attendance</h2>
      <p>
        When you join a plan, other people are counting on you. Each join includes a commitment you confirm in the
        app.
      </p>
      <ul>
        <li>
          <strong>Your commitment.</strong> Before joining, you confirm that you will attend at the stated time and
          venue, or tap <strong>Can&apos;t make it</strong> at least 2 hours before the start. We record the time and
          version of this confirmation.
        </li>
        <li>
          <strong>Cancelling.</strong> Use <strong>Can&apos;t make it</strong> or <strong>Leave plan</strong> as soon
          as you know you cannot attend. Cancelling more than 2 hours before the start has no effect on your record.
        </li>
        <li>
          <strong>Late cancels and no-shows.</strong> Leaving within 2 hours of the start, or not attending without
          cancelling, counts as a no-show.
        </li>
        <li>
          <strong>Attendance records.</strong> After a plan, the host may mark who attended. If the host does not,
          participants who confirmed &quot;Yes&quot; may be counted as attended. You can dispute a mark you believe is
          wrong by writing to {support}.
        </li>
        <li>
          <strong>Consequences.</strong> Hosts can see your attendance record. Repeated no-shows may mean hosts must
          approve your future joins, lower your visibility, or lead to suspension. Reliable attendance can earn a
          &quot;Shows up&quot; badge.
        </li>
        <li>
          <strong>Hosts&apos; decisions.</strong> A host may decline or remove a participant. If you are declined or
          removed from a plan, you cannot request to join that plan again.
        </li>
      </ul>

      <h2>7. Meeting in person and safety</h2>
      <p>
        Plans involve meeting people you may not know, and many involve physical activity. You take part at your own
        risk and are responsible for your own safety and conduct.
      </p>
      <ul>
        <li>
          Follow our Safety Guidelines: meet only at public venues, tell a friend where you are going, arrange your
          own transport, and leave if you feel unsafe.
        </li>
        <li>Make sure you are fit for the activity, use suitable equipment, and follow the venue&apos;s rules.</li>
        <li>Do not attend under the influence of alcohol or drugs where this could put anyone at risk.</li>
        <li>
          If you are in danger, contact the police on <strong>112</strong> first. Then report the user or plan in the
          app.
        </li>
        <li>
          Any dispute that arises at or after a plan is between the people involved. We may help by reviewing reports
          and taking action on accounts, but we are not a party to the dispute.
        </li>
      </ul>

      <h2>8. Community rules</h2>
      <p>You must not use the Service to host, display, upload, share or arrange anything that:</p>
      <ul>
        <li>Harasses, threatens, stalks, bullies or intimidates anyone, online or in person.</li>
        <li>
          Is sexual, obscene, invasive of another person&apos;s privacy (including their body), or seeks dates or
          sexual contact.
        </li>
        <li>
          Is hateful or discriminatory, or insults or harasses anyone on the basis of gender, religion, caste, race,
          ethnicity, disability or sexual orientation.
        </li>
        <li>Is harmful to children or involves anyone under 18.</li>
        <li>Impersonates another person, misrepresents your identity, or misleads others about a plan.</li>
        <li>Promotes or arranges anything illegal, including gambling, betting, drugs or alcohol sales.</li>
        <li>
          Advertises, sells, recruits, or sends spam, chain messages or commercial promotions without our written
          permission.
        </li>
        <li>Infringes anyone&apos;s copyright, trademark or other rights.</li>
        <li>
          Contains malware, or tries to hack, scrape, overload or reverse engineer the Service or get around our
          limits.
        </li>
        <li>
          Threatens the unity, integrity, defence, security or sovereignty of India, public order or friendly
          relations with other countries, or is otherwise unlawful.
        </li>
      </ul>
      <p>
        You also must not collect other users&apos; personal data, contact them outside the app against their wishes,
        or create plans with no intention of holding them.
      </p>

      <h2>9. Your content</h2>
      <p>
        &quot;Your content&quot; means your display name, profile photo, plan details, cover photos, join messages
        and chat messages.
      </p>
      <ul>
        <li>
          <strong>You own it.</strong> You keep ownership of your content.
        </li>
        <li>
          <strong>Licence to us.</strong> You give KOODAL a non-exclusive, royalty-free, worldwide licence to host,
          store, copy, resize, display and share your content only to run, improve and promote the Service. For
          example, a plan&apos;s title, cover and venue may appear on a public share page and in WhatsApp link
          previews. This licence ends when your content is deleted, except for copies we must keep for safety or
          legal reasons (section 12).
        </li>
        <li>
          <strong>Your promises.</strong> You have the right to share your content, and it follows section 8.
        </li>
        <li>
          <strong>Cover photos.</strong> Use photos of the venue or activity. Avoid photos that show other people.
          Uploaded covers are checked before others see them, and we may remove any cover at any time.
        </li>
        <li>
          <strong>Plan chat.</strong> Messages in a plan&apos;s group chat are visible to the host and accepted
          participants. Do not share anything there you would not want them to see.
        </li>
        <li>
          <strong>Our content.</strong> The KOODAL name, logo, app design and cover library belong to us or our
          licensors. You may not use them without our written permission.
        </li>
      </ul>

      <h2>10. Reports, blocks and enforcement</h2>
      <ul>
        <li>
          <strong>Report.</strong> You can report a profile or plan in the app. We do not tell the reported user who
          reported them.
        </li>
        <li>
          <strong>Block.</strong> You can block any user. Blocked users cannot see or join each other&apos;s plans,
          and a blocked user is removed from upcoming plans you host.
        </li>
        <li>
          <strong>What we may do.</strong> If we believe you have broken these Terms or the law, or put others at
          risk, we may remove content, hide your plans, limit your ability to join, or suspend or permanently remove
          your account. Where safety requires it, we may act without notice. If an account receives several reports,
          its open plans may be hidden automatically while we review it.
        </li>
        <li>
          <strong>Cooperation with authorities.</strong> We may preserve information and share it with law
          enforcement or government agencies when required by law.
        </li>
        <li>
          <strong>Appeals.</strong> If you think we made a mistake, write to the Grievance Officer (section 14).
        </li>
      </ul>

      <h2>11. Costs, venues and third parties</h2>
      <ul>
        <li>
          <strong>Costs between users.</strong> KOODAL is free to use. Hosts may mention a shared cost, such as court
          fees, in a plan&apos;s note. Any payment is made directly between users. KOODAL is not responsible for
          collecting, paying or refunding any amount.
        </li>
        <li>
          <strong>Venues.</strong> Venue names and locations come from Google Maps and from hosts. We do not own,
          operate, inspect or endorse any venue.
        </li>
        <li>
          <strong>Third-party services.</strong> The Service uses providers such as SMS, maps and push notification
          services. Their own terms may apply, and we are not responsible for their services or for websites linked
          from KOODAL.
        </li>
      </ul>

      <h2>12. Privacy and your data</h2>
      <p>
        Our <Link href="/privacy">Privacy Policy</Link> explains what personal data we collect, why, and your rights
        under the Digital Personal Data Protection Act, 2023 and the DPDP Rules, 2025.
      </p>
      <ul>
        <li>
          We collect only what the Service needs: your phone number, profile, area, interests, plans, joins,
          attendance, reports and device information for sign-in and notifications.
        </li>
        <li>
          <strong>Deleting your account.</strong> You can delete your account in Settings. We will cancel your hosted
          upcoming plans, remove you from joined plans, end your sessions, delete your photo, and remove your phone
          number and name.
        </li>
        <li>
          We keep a minimal, anonymised record of past plans and reports after deletion for safety and legal reasons.
          The same phone number can be used to create a new account later.
        </li>
      </ul>

      <h2>13. Disclaimers, liability and indemnity</h2>
      <ul>
        <li>
          <strong>As is.</strong> The Service is provided &quot;as is&quot; and &quot;as available&quot;. To the
          extent the law allows, we make no promise that plans will happen, that users are who they say they are, or
          that the Service will meet your needs.
        </li>
        <li>
          <strong>Conduct of others.</strong> We are not responsible for the actions, statements or conduct of any
          user or third party, online or offline, or for injury, loss or damage that happens at or because of a plan.
        </li>
        <li>
          <strong>Limit.</strong> To the extent the law allows, KOODAL will not be liable for any indirect,
          incidental, special or consequential loss, or for loss of data, profit or goodwill. Our total liability to
          you for any claim about the Service is limited to [INR 1,000] or the amount you paid us in the 12 months
          before the claim, whichever is higher.
        </li>
        <li>
          <strong>What we do not exclude.</strong> Nothing in these Terms limits liability that cannot be limited
          under Indian law, such as liability for fraud.
        </li>
        <li>
          <strong>Indemnity.</strong> You agree to compensate KOODAL and its team for claims, losses and reasonable
          legal costs arising from your breach of these Terms, your content, or your conduct at a plan.
        </li>
      </ul>

      <h2>14. Grievance Officer</h2>
      <p>
        In line with the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021,
        you can raise complaints about content, accounts or these Terms with our Grievance Officer.
      </p>
      <GrievanceOfficer />
      <ul>
        <li>We acknowledge complaints within 24 hours and aim to resolve them within 15 days of receipt.</li>
        <li>
          Complaints about content that shows someone&apos;s private areas, nudity or sexual acts, or impersonates
          them, are acted on within 24 hours.
        </li>
        <li>
          If you are not satisfied with the Grievance Officer&apos;s decision, you may appeal to the Grievance
          Appellate Committee set up by the Government of India within 30 days of that decision.
        </li>
        <li>
          For data protection requests, see the contact in our <Link href="/privacy">Privacy Policy</Link>.
        </li>
      </ul>

      <h2>15. General</h2>
      <ul>
        <li>
          <strong>Changes to these Terms.</strong> We may update these Terms. For material changes, we will notify you
          in the app and ask you to accept the new version before you continue using the Service. The version you
          accepted and when are recorded.
        </li>
        <li>
          <strong>Ending the agreement.</strong> You can stop using KOODAL and delete your account at any time.
          Sections 9 (licence for content kept for legal reasons), 13, 15 and any accrued rights survive.
        </li>
        <li>
          <strong>Governing law.</strong> These Terms are governed by the laws of India. Courts in Chennai, Tamil
          Nadu have exclusive jurisdiction, subject to any right you have to approach a consumer forum.
        </li>
        <li>
          <strong>Whole agreement.</strong> These Terms, with the Privacy Policy and Safety Guidelines, are the whole
          agreement between you and KOODAL about the Service. If any part is found unenforceable, the rest stays in
          effect. Our not enforcing a right is not a waiver of it.
        </li>
        <li>
          <strong>Language.</strong> If we publish these Terms in Tamil or another language and there is a conflict,
          the English version applies.
        </li>
        <li>
          <strong>Contact.</strong> {support}
        </li>
      </ul>
    </LegalPage>
  );
}

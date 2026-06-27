import { Star } from "lucide-react";
import Link from "next/link";
import { testimonials } from "@/data/testimonials";

export default function GoogleReviewsWidget() {
  const featured = testimonials.filter((t) => t.isNamed).slice(0, 3);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="size-10 flex items-center justify-center">
          <svg viewBox="0 0 48 48" className="size-8">
            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
          </svg>
        </div>
        <div>
          <p className="text-sm font-semibold text-navy">Google Reviews</p>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="text-2xl font-bold text-navy">4.8</span>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`size-4 ${star <= 4 ? "fill-yellow-400 text-yellow-400" : star === 5 ? "fill-yellow-400/50 text-yellow-400" : "text-gray-300"}`}
                />
              ))}
            </div>
          </div>
          <p className="text-xs text-grey-dark mt-0.5">Based on 50+ reviews</p>
        </div>
      </div>

      {/* Featured Reviews */}
      <div className="space-y-4">
        {featured.map((review) => (
          <div
            key={review.id}
            className="bg-[var(--grey-light)] rounded-lg p-4 border-l-4 border-cyan"
          >
            <div className="flex items-center gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`size-3.5 ${star <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                />
              ))}
            </div>
            <p className="text-sm text-grey-dark leading-relaxed">&ldquo;{review.quote}&rdquo;</p>
            <p className="text-xs font-medium text-navy mt-2">
              {review.author}
              {review.company ? `, ${review.company}` : ""}
            </p>
          </div>
        ))}
      </div>

      {/* View All Link */}
      <Link
        href="https://search.google.com/local/reviews?placeid=YOUR_PLACE_ID"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-sm text-cyan font-medium mt-4 hover:underline"
      >
        View all reviews on Google &rarr;
      </Link>

      {/* Embedded Widget Placeholder */}
      {/*
        === Google Reviews Embed Instructions ===
        To display a live Google Reviews widget:
        
        Option A — Elfsight:
        1. Go to https://apps.elfsight.com/create/google-reviews/
        2. Sign up, connect Google Business Profile, customize
        3. Copy the embed code and paste it below inside a <div> on this page
        
        Option B — EmbedSocial:
        1. Go to https://embedsocial.com/products/google-reviews-widget/
        2. Connect Google Business Profile, customize
        3. Copy the embed script and paste it below
        
        Option C — Custom (using Google Places API):
        Fetch reviews server-side and render them in this component.
        
        <div className="mt-6">
          <script src="https://static.elfsight.com/platform/platform.js" async />
          <div class="elfsight-app-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" />
        </div>
      */}
    </div>
  );
}

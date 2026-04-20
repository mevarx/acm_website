"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import EventCard from "@/components/ui/EventCard";
import { events, type EventStatus } from "@/data/events";

type FilterTab = "all" | EventStatus;

const tabs: { value: FilterTab; label: string }[] = [
  { value: "all", label: "All" },
  { value: "upcoming", label: "Upcoming" },
  { value: "ongoing", label: "Ongoing" },
  { value: "past", label: "Past" },
];

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState<FilterTab>("all");

  const filteredEvents =
    activeTab === "all"
      ? events
      : events.filter((e) => e.status === activeTab);

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Events"
          subtitle="Workshops, hackathons, symposiums, and more — explore what we've been up to and what's coming next."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 sm:mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === tab.value
                  ? "bg-acm-blue text-white shadow-sm"
                  : "bg-surface text-muted hover:text-dark-text hover:bg-gray-100 border border-border"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {filteredEvents.map((event, i) => (
              <EventCard key={event.id} event={event} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted text-lg">
              No {activeTab} events at the moment.
            </p>
            <p className="text-sm text-muted mt-2">
              Check back soon for updates!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

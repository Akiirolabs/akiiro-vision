CREATE TABLE `support_tickets` (
	`id` text PRIMARY KEY NOT NULL,
	`message` text NOT NULL,
	`status` text DEFAULT 'new' NOT NULL,
	`source` text DEFAULT 'website-agent' NOT NULL,
	`created_at` text NOT NULL
);

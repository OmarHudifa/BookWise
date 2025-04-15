import { Client as WorkflowClient } from "@upstash/workflow";
import { Client as QStashClient, resend } from "@upstash/qstash";
import config from "@/lib/config";

export const workflowClient = new WorkflowClient({
  baseUrl: config.env.upstash.qstashUrl,
  token: config.env.upstash.qstashToken,
});

const qstashClient = new QStashClient({
  token: config.env.upstash.qstashToken,
});


export const sendEmail=async({email,message,subject}:{email:string,message:string,subject:string})=>{

    await qstashClient.publishJSON({
        api: {
          name: "email",
          provider: resend({ token: config.env.resendToken }),
        },
        body: {
            from: "Omar Hudifa <omarhudifa@gmail.com>",
            to: [email],
            subject,
            html: message,
          },
      });

}


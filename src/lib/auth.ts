import { getServerSession, type DefaultSession, type NextAuthOptions } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      role: string;
    } & DefaultSession["user"];
  }

  interface User {
    role: string;
  }
}

export const getServerAuthSession = () => {
  return getServerSession(authOptions);
};

export const requireAuth = async (req: any, res: any, next: any) => {
  const session = await getServerAuthSession();
  if (!session) {
    res.status(401).json({ message: "認証が必要です" });
    return;
  }
  req.session = session;
  next();
};

export const requireRole = (roles: string[]) => {
  return async (req: any, res: any, next: any) => {
    const session = await getServerAuthSession();
    if (!session) {
      res.status(401).json({ message: "認証が必要です" });
      return;
    }
    
    if (!roles.includes(session.user.role)) {
      res.status(403).json({ message: "権限がありません" });
      return;
    }
    
    req.session = session;
    next();
  };
};

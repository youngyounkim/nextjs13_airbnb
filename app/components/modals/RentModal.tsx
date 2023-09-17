"use client";

import { signIn } from "next-auth/react";
import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import Modal from "./Modal";
import { useRouter } from "next/navigation";
import useRentModal from "@/app/hooks/useRentModal";

const RentModal = () => {
  const router = useRouter();
  const { isOpen, onClose } = useRentModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Modal
      isOpen={isOpen}
      title="Airbnb your home"
      actionLabel="Submit"
      onClose={onClose}
      onSubmit={onClose}
    />
  );
};

export default RentModal;
